import { Request, Response } from 'express';
import axios from 'axios';
import * as nodemailer from 'nodemailer';
import { validationResult, body } from 'express-validator';

class SendEmailController {
    public validationRules = [
        body('nombre').matches(/^[a-zA-ZÀ-ÿ\s]{5,40}$/),
        body('telefono').isNumeric(),
        body('email').isEmail(),
        body('empresa').matches(/^[a-zA-ZÀ-ÿ\s]{1,30}$/),
        body('select').notEmpty(),
        body('descripcion').matches(/^[a-zA-ZÀ-ÿ0-9,\s]{1,70}$/)
    ];

    handleSubmit = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { nombre, telefono, email, empresa, select, descripcion} = req.body;
            const recaptchaResponse = req.body['g-recaptcha-response'];
            const result = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
                params: {
                    secret: process.env.SECRET_KEY,
                    response: recaptchaResponse,
                },
            });

            if (result.data.success) {
                const contentHTML = this.createEmailContent(nombre, telefono, email, empresa, select, descripcion);
                await this.sendEmail(contentHTML);
                return res.status(200).json({ message: "Correo enviado exitosamente" });
            } else {
                console.log('Error: reCAPTCHA inválido');
                return res.status(403).json({ message: "Error de validación de reCAPTCHA" });
            }
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    };

    private createEmailContent = (nombre: string, telefono: string, email: string, empresa: string, select: string, descripcion: string): string => {
        return `
            <h1>Información del Contacto</h1>
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Teléfono: ${telefono}</li>
                <li>Email: ${email}</li>
                <li>Empresa: ${empresa}</li>
                <li>Categoría: ${select}</li>
                <li>Descripción: ${descripcion}</li>
            </ul>
        `;
    };

    private sendEmail = async (contentHTML: string): Promise<void> => {
        const transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            auth: {
                user: process.env.CORREO,
                pass: process.env.PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const info = await transporter.sendMail({
            from: "'Cpcsirt' <" + process.env.CORREO + ">",
            to: process.env.DESTINO,
            subject: 'Alerta de Seguridad Cpscirt',
            html: contentHTML
        });

        console.log('Mensaje enviado: ', info.messageId);
    };
}

export default new SendEmailController();

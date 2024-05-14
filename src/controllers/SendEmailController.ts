import { Request, Response } from 'express';
import axios  from 'axios';
import * as nodemailer from 'nodemailer';
import { validationResult, body } from 'express-validator';


class SendEmailController{
    public validationRules = [
        body('nombre').matches(/^[a-zA-ZÀ-ÿ\s]{5,40}$/),
        body('telefono').isNumeric(),
        body('email').isEmail(),
        body('empresa').matches(/^[a-zA-ZÀ-ÿ\s]{1,30}$/),
        body('select').notEmpty(),
        body('descripcion').matches(/^[a-zA-ZÀ-ÿ0-9,\s]{1,70}$/)
    ];
    async handleSubmit(req: Request, res: Response): Promise<Response> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { nombre, telefono, email, empresa, select, descripcion } = req.body;
            const recaptchaResponse = req.body['g-recaptcha-response'];
            console.log(nombre,telefono,email,empresa,select,descripcion)
            const result = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
                params: {
                    secret: process.env.SECRET_KEY,
                    response: recaptchaResponse,
                },
            });
            console.log(result.data);

            if (result.data.success) {
                const contentHTML = this.createEmailContent(nombre, telefono, email, empresa, select, descripcion);
                await this.sendEmail(contentHTML);
                return res.send('Correo enviado');
            } else {
                return res.status(400).send('Error: reCAPTCHA inválido');
            }
        } catch (e) {
            console.error(e);
            return res.status(500).send('Algo salió mal');
        }
    }

    private createEmailContent(nombre: string, telefono: string, email: string, empresa: string, select: string, descripcion: string): string {
        return `
            <h1>Correo con el botón de emergencia</h1>
            <ul>
                <li>Nombre del empleado: ${nombre}</li>
                <li>Teléfono: ${telefono}</li>
                <li>Correo: ${email}</li>
                <li>Nombre de la empresa: ${empresa}</li>
                <li>Amenaza: ${select}</li>
            </ul>
            <p>${descripcion}</p>
        `;
    }

    private async sendEmail(contentHTML: string): Promise<void> {
        const transporter = nodemailer.createTransport({
            host: 'mail1.cyberpeace.com.mx',
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
            from: "'Cpcsirt' <cpcsirt@cpcsirt.com>",
            to: process.env.DESTINO,
            subject: 'Cpscirt',
            html: contentHTML
        });

        console.log('Mensaje enviado', info.messageId);
    }
}


export default new SendEmailController();
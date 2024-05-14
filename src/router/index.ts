import express from "express";
import path from 'path';
import SendEmailController from "../controllers/SendEmailController";


export const router = express.Router();

router.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// send email to soc 
router.post('/email', SendEmailController.handleSubmit);
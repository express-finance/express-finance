import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export { Mail };
export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASS
    },
    secure: true
  });
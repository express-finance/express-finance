import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from "@services/prisma";
import Handlebars from 'handlebars';
import path from 'path';
import { readFileSync } from 'fs';

import { transporter, Mail } from '@services/auth/mailTransporter';

const emailsDir = path.resolve(process.cwd(), 'services/auth/templates');

interface SendVerificationRequestProps {
    identifier: string | Mail.Address | (string | Mail.Address)[]; 
    url: string;
}

const sendVerificationRequest = ({ identifier, url }: SendVerificationRequestProps) => {
    const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
      encoding: 'utf8',
    });
    const emailTemplate = Handlebars.compile(emailFile);
    transporter.sendMail({
      from: `"✨Express Finance" ${process.env.EMAIL_FROM}`,
      to: identifier,
      subject: 'Your sign-in link for Express Finance',
      html: emailTemplate({
        base_url: process.env.NEXTAUTH_URL,
        signin_url: url,
        email: identifier,
      }),
    });
  };

const sendWelcomeEmail = async ({ user }) => {
    const { email } = user;

    try {
        const emailFile = readFileSync(path.join(emailsDir, 'welcome.html'), {
        encoding: 'utf8',
        });
        const emailTemplate = Handlebars.compile(emailFile);
        await transporter.sendMail({
        from: `"✨ SupaVacation" ${process.env.EMAIL_FROM}`,
        to: email,
        subject: 'Welcome to SupaVacation! 🎉',
        html: emailTemplate({
            base_url: process.env.NEXTAUTH_URL,
            support_email: 'support@themodern.dev',
        }),
        });
    } catch (error) {
        console.log(`❌ Unable to send welcome email to user (${email})`);
    }
};

export default NextAuth({
    pages: {
        signIn: '/',
        signOut: '/',
        error: '/',
        verifyRequest: '/'
    },
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: parseInt(process.env.EMAIL_SERVER_PORT || "") || undefined,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASS
                },
                from: process.env.EMAIL_FROM,
            },
            maxAge: 600,
            sendVerificationRequest
        })
    ],
    adapter: PrismaAdapter(prisma),
    events: { createUser: sendWelcomeEmail }
});
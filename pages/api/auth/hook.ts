import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@services/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, secret } = req.body;

	if (req.method !== 'POST') {
		return res.status(403).json({ message: `${req.method} not allowed`});
	}

	if (secret !== process.env.AUTH0_HOOK_SECRET) {
    return res.status(403).json({ message: `The secret is required 🤫` });
  }

	if (email) {
		await prisma.user.create({
			data: { email },
		});
		return res.status(201).json({
			message: `User with email: ${email} has successfully been created`,
		});
	}
}

export default handler;
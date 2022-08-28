import { prisma } from '@services/prisma';

export interface User {
	nickname: string;
	name: string;
	picture: string;
	updatedAt: Date;
	email: string;
	emailVerified: boolean;
}

export const createUser = async (userInfo: User) => {
		const user = await prisma.user.create({
			data: { ...userInfo }
		});
		return user;
}
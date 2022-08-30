import { handleLogin } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	handleLogin(req, res, {
		authorizationParams: {
			screen_hint: 'signup',
		},
	});
}

import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0";
import { createUser } from "@utils/db/createUser";
import { NextApiRequest, NextApiResponse } from "next";

const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session) => {
	const { nickname, name, picture, updated_at: updatedAt, email, email_verified: emailVerified } = session.user;

	try {
		await createUser({ nickname, name, picture, updatedAt, email, emailVerified});
	} catch (err) {
		console.log(err);
	}

	return session;
}

export default handleAuth({
	async callback (req: NextApiRequest, res: NextApiResponse) {
		try {
			await handleCallback(req, res, { afterCallback })
		} catch (err: any) {
			res.status(err.status || 500).end(err.message)
		}
	}
});
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { Layout } from '@ui/layout';

// export async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
// 	try {
// 		const session = await getSession(req, res);
// 		if (!session) {
// 			return {
// 				redirect: {
// 					destination: '/logout',
// 					permanent: false
// 				}
// 			};
// 		}
// 	} catch (err) {
// 		return {
// 			redirect: {
// 				destination: '/logout',
// 				permanent: false
// 			}
// 		};
// 	}
// }

const Home = () => {

	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;
	if (!user) return <Link href="/api/auth/login"><a>Login</a></Link>;
	return <Layout user={user} title="Homepage">Hello {user.name}, <Link href="/api/auth/logout"><a>Logout</a></Link></Layout>;
};

export default Home;


{/* <Formik<Partial<Expense>>
	initialValues={{
		name: "",
		description: "",
		amount: 0
	}}
	onSubmit={(values: Partial<Expense>, { setSubmitting }: FormikHelpers<Partial<Expense>>) => {
		createNewExpense(values);
		setSubmitting(false);
	}}
>
	<Form>
		<label htmlFor='name'>Name</label>
		<Field id="name" name="name" type="text" />

		<label htmlFor='description'>Description</label>
		<Field id="description" name="description" type="text" />

		<label htmlFor='amount'>Amount</label>
		<Field id="amount" name="amount" type="text" />

		<button type="submit">Save</button>
	</Form>
</Formik>; */};;;
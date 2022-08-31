import { Layout } from '@ui/layout';
import { NextPageProps } from './_app';

interface DashboardProps extends NextPageProps { };

export default function Dashboard({ user }: DashboardProps) {
	return <Layout user={user} title="Homepage">Hello {user?.name}</Layout>;
};


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
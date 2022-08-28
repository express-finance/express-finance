import { Formik, Form, Field, FormikHelpers } from 'formik';
import { prisma } from '@services/prisma';
import type { Expense } from '@prisma/client';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ExpenseCard } from '@components/cards/ExpenseCard';

export async function getServerSideProps() {
	try {
		const expenses = await prisma.expense.findMany();
		return {
			props: {
				expenses: JSON.parse(JSON.stringify(expenses))
			}
		};

	} catch (err) {
		return {
			props: {
				expenses: [],
				err: "Error occurred while retrieving expenses"
			}
		};
	}
}

const Home = ({ expenses, err }: { expenses: Expense[]; err: string; }) => {

	const createNewExpense = async (data: Partial<Expense>) => {
		await axios.post('https://express-finance.vercel.app//api/expense', data);
	};

	if (err) {
		toast.error("An issue occurred while gathering expenses :(");
	}

	return (
		<>
			<div>
				{err && err}
			</div>
			<div style={{ padding: '10px', backgroundColor: "#999" }}>
				<h2>New Expense</h2>
				<Formik<Partial<Expense>>
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
				</Formik>
			</div>
		</>
	);
};

export default Home;

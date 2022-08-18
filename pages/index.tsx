import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import { prisma } from '@services/prisma';
import type { Expense } from '@prisma/client';

export async function getServerSideProps() {
	const expenses = await prisma.expense.findMany();
	return {
		props: {
			expenses: JSON.parse(JSON.stringify(expenses))
		}
	};
}

const Home = ({ expenses }: { expenses: Expense[]; }) => {
	return (
		<div className={styles.container}>
			<div>
				{expenses.map(({ id, name, description, amount, createdAt }) => (
					<div>
						<h1>{name}</h1>
						<h2>{description}</h2>
						<p>{amount}</p>
						<p>{createdAt.toString()}</p>
					</div>
				))}
			</div>
			<div style={{ padding: '10px', backgroundColor: "#999" }}>
				<h2>New Expense</h2>
				<form style={{ display: 'flex', flexDirection: "column" }}>
					<label>
						Expense Name
						<input type="text" />
					</label>
					<label>
						Expense Description
						<input type="text" />
					</label>
					<label>
						Expense Amount
						<input type="text" />
					</label>
				</form>
			</div>
		</div>
	);
};

export default Home;

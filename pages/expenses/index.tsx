
import { Layout } from '@ui/layout';
import React from 'react';
import { NextPageProps } from '../_app';

interface ExpensesProps extends NextPageProps {
}

export default function Expenses({ user }: ExpensesProps) {
	return (
		<Layout user={user}>
			<div>Expenses</div>
		</Layout>
	);
}

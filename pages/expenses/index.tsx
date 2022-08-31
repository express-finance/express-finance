
import React from 'react';
import { Layout } from '@ui/layout';
import { NextPageProps } from '../_app';

export default function Expenses({ user }: NextPageProps) {
	return (
		<Layout user={user}>
			<div>Expenses</div>
		</Layout>
	);
}
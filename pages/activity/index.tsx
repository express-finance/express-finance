import { Layout } from '@ui/layout';
import React from 'react';
import { NextPageProps } from '../_app';

export default function Activity({ user }: NextPageProps) {
	return (
		<Layout user={user}>
			<div>Activity</div>
		</Layout>
	);
}

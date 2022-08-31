import { Layout } from '@ui/layout';
import React from 'react';
import { NextPageProps } from '../_app';

interface ActivityProps extends NextPageProps { }

export default function Activity({ user }: ActivityProps) {
	return (
		<Layout user={user}>
			<div>Activity</div>
		</Layout>
	);
}

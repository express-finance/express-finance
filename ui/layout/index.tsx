import React from 'react';
import Head from 'next/head';
import { Box } from '@ui/core/layout';
import { PrimaryNav } from '@ui/nav';
import { UserProfile } from '@auth0/nextjs-auth0';

export interface LayoutProps {
	user: UserProfile | undefined;
	children: React.ReactNode;
	title?: string;
}

export const Layout = ({
	user,
	title,
	children
}: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{title || "Express Finance"}</title>
			</Head>

			<PrimaryNav user={user} />

			<Box>
				{children}
			</Box>
		</>
	);
};
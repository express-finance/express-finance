import React from 'react';
import { Flex } from '@ui/core/layout';
import { Heading } from '@ui/core/typography';
import { Link } from '@ui/core/navigation';
import { Spinner } from '@ui/core/feedback';
import { Layout } from '@ui/layout';
import { useRouter } from 'next/router';
import { NextPageProps } from './_app';

export default function Logout({ user }: NextPageProps): JSX.Element {
	const router = useRouter();

	React.useEffect(() => {
		if (user) {
			router.replace('/api/auth/logout');
		}
	}, [user, router]);

	return (
		<Layout user={user}>
			{!user && (
				<Flex direction='column'>
					<Heading as='h1'>
						You have been logged out of Express Finance.
					</Heading>

					<Link href='/api/auth/login'>Login again!</Link>
				</Flex>
			)}

			{user && (
				<Flex direction='column'>
					<Heading>Logging you out...</Heading>
					<Spinner />
				</Flex>
			)}
		</Layout>
	);
}

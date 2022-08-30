import React from 'react';
import { UserProfile } from '@auth0/nextjs-auth0';
import { Flex, Heading, Link, Spinner } from '@chakra-ui/react';
import { Layout } from '@ui/layout';
import { useRouter } from 'next/router';

interface LogoutProps {
	user: UserProfile | undefined;
}

export default function Logout({ user }: LogoutProps): JSX.Element {
	const router = useRouter();

	React.useEffect(() => {
		if (user) {
			router.replace('/api/auth/logout');
		}
	}, [user, router]);

	return (
		<Layout user={user}>
			{!user && (
				<Flex direction="column">
					<Heading as="h1">
						You have been logged out of Express Finance.
					</Heading>

					<Link href='/api/auth/login'>
						Login again!
					</Link>
				</Flex>
			)}

			{user && (
				<Flex direction="column">
					<Heading>
						Logging you out...
					</Heading>
					<Spinner />
				</Flex>
			)}
		</Layout>
	);

};
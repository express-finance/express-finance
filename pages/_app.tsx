import { UserContext, UserProfile, UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '@ui/theme/chakra';

export interface NextPageProps {
	user?: UserProfile;
	children?: React.ReactNode;
}
interface UserContextProps {
	user?: UserProfile;
	error?: Error;
	isLoading?: boolean;
}

function ExpressFinanceApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<UserProvider user={pageProps.user}>
				<UserContext.Consumer>
					{({ user, error, isLoading }: UserContextProps) => {
						return (
							<ChakraProvider theme={theme}>
								<Component {...pageProps} user={user} />
							</ChakraProvider>
						);
					}
					}
				</UserContext.Consumer>
			</UserProvider>
		</UserProvider>
	);
}

export default ExpressFinanceApp;

import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@ui/theme/chakra';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</UserProvider>
	);
}

export default MyApp;

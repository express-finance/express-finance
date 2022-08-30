import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '@ui/theme/chakra';

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<Head />
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
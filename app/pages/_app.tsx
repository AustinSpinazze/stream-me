import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { themeDark, themeLight } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={false ? themeDark : themeLight}>
			<CssBaseline />
			<Component {...pageProps} />;
		</ThemeProvider>
	);
}

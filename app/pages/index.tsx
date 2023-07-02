import Head from 'next/head';
import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>StreamMe</title>
				<meta
					name='description'
					content='StreamMe a website to share your own embedded web videos'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Container maxWidth='sm'>
					<Box my={4}>
						<Typography
							role='heading'
							variant='h4'
							component='h1'
							gutterBottom
						>
							NextJS Example
						</Typography>
						<Link href='/about'>
							<Button
								data-testid='link'
								variant='contained'
								color='primary'
							>
								Go to about page
							</Button>
						</Link>
					</Box>
				</Container>
			</main>
		</>
	);
}

import Head from 'next/head';
import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function About() {
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
						<Typography variant='h4' component='h1' gutterBottom>
							NextJS Example
						</Typography>
						<Link href='/'>
							<Button variant='contained' color='primary'>
								Go to home page
							</Button>
						</Link>
					</Box>
				</Container>
			</main>
		</>
	);
}

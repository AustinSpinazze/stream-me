import { render, screen } from '@testing-library/react';
import Home from './index';
import '@testing-library/jest-dom';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />);

		const heading = screen.getByRole('heading', {
			name: /NextJS Example/i,
		});

		const link = screen.getByTestId('link');

		expect(heading).toBeInTheDocument();
		expect(link).toBeInTheDocument();
	});
});

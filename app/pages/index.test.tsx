import { render, screen } from '@testing-library/react';
import Home from './index';
import '@testing-library/jest-dom';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />);

		const heading = screen.getByRole('heading', {
			name: /docs/i,
		});

		const paragraph = screen.getByTestId('paragraph');

		expect(heading).toBeInTheDocument();
		expect(paragraph).toBeInTheDocument();
	});
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import routes from '../../routes';
import { createMemoryRouter, RouterProvider } from 'react-router';

describe('Home Button', () => {
    it('Clicking return button renders the Home Page', async () => {
        const user = userEvent.setup();

        const router = createMemoryRouter(routes, {
        initialEntries: ['/shop']
        });

        render(<RouterProvider router={router} />);
        
        const homeButton = screen.getByRole('button', { name: /return to homepage/i});

        await user.click(homeButton);

        expect(
            screen.getByRole('heading', { name: 'Welcome to Bibili.' })
        ).toBeInTheDocument();
    });
})
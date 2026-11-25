import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import routes from '../../routes';
import { createMemoryRouter, RouterProvider } from 'react-router';

describe('Home Button', () => {
    it('Clicking Browse Button renders the Shop Page', async () => {
        const user = userEvent.setup();

        const router = createMemoryRouter(routes, {
            initialEntries: ['/']
        });

        render(<RouterProvider router={router} />);
        
        const shopButton = screen.getByRole('button', { name: /browse items/i});

        await user.click(shopButton);

        expect(
            screen.getByRole('heading', { name: 'All Products' })
        ).toBeInTheDocument();
    });
})
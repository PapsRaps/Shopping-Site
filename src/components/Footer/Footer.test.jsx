import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import routes from '../../routes';
import { createMemoryRouter, RouterProvider } from 'react-router';

describe('Footer Links', () => {
    it('Clicking Home link renders the Home Page', async () => {
        const user = userEvent.setup();

        const router = createMemoryRouter(routes, {
        initialEntries: ['/shop']
        });

        render(<RouterProvider router={router} />);
        
        const homeLink = within(screen.getByRole('contentinfo')).getByRole('link', { name: 'Home' });

        await user.click(homeLink);

        expect(
        screen.getByRole('heading', { name: 'Welcome to Bibili.' })
        ).toBeInTheDocument();
    });

    it('Clicking Shop link renders the Shop Page', async () => {
        const user = userEvent.setup();

        const router = createMemoryRouter(routes, {
        initialEntries: ['/']
        });

        render(<RouterProvider router={router} />);
        
        const shopLink = within(screen.getByRole('contentinfo')).getByRole('link', { name: 'Shop' });

        await user.click(shopLink);

        expect(
        screen.getByRole('heading', { name: 'All Products' })
        ).toBeInTheDocument();
    });

    it('Clicking Cart link renders the Cart Page', async () => {
        const user = userEvent.setup();

        const router = createMemoryRouter(routes, {
        initialEntries: ['/']
        });

        render(<RouterProvider router={router} />);
        
        const cartLink = within(screen.getByRole('contentinfo')).getByRole('link', { name: 'Cart' });

        await user.click(cartLink);

        expect(
        screen.getByRole('heading', { name: 'Your cart is empty' })
        ).toBeInTheDocument();
    });
})
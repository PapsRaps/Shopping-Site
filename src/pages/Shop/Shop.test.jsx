import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import routes from '../../routes';
import { createMemoryRouter, RouterProvider } from 'react-router';

const mockProducts = [
    {
        id: 1,
        title: 'Test Product',
        price: 20,
        image: 'https://example.com/product.jpg'
    },
    {
        id: 2,
        title: 'Another Product',
        price: 35,
        image: 'https://example.com/product2.jpg'
    }
];

describe('Fetch Display', () => {
    it('Fetching displays the loading screen', () => {
        let resolveFetch;

        globalThis.fetch = vi.fn(() => new Promise((resolve) => {
            resolveFetch = resolve;
        }));

        const router = createMemoryRouter(routes, {
            initialEntries: ['/shop']
        });

        render(<RouterProvider router={router} />);

        expect(
            screen.getByText('Loading')
        ).toBeInTheDocument();
    });

    it('Successful fetch displays the items', async () => {
        globalThis.fetch = vi.fn();

        globalThis.fetch.mockResolvedValue({
            ok: true,
            json: async () => mockProducts
        });

        const router = createMemoryRouter(routes, {
            initialEntries: ['/shop']
        });

        render(<RouterProvider router={router} />);

        expect(
            await screen.findByText('Test Product')
        ).toBeInTheDocument();
        expect(
            await screen.findByText('Another Product')
        ).toBeInTheDocument();
    });

    it('Displays EmptyShop when fetching fails', async () => {
        globalThis.fetch = vi.fn();

        globalThis.fetch.mockRejectedValue(
            new TypeError('Failed to fetch')
        );

        const router = createMemoryRouter(routes, {
            initialEntries: ['/shop']
        });

        render(<RouterProvider router={router} />);

        expect(
            await screen.findByText(/Unable to connect/i)
        ).toBeInTheDocument();
        expect(
            screen.queryByText('Loading')
        ).not.toBeInTheDocument();
    });
})
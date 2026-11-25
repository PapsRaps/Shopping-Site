import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import routes from '../../routes';
import { createMemoryRouter, RouterProvider } from 'react-router';

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
            screen.getByTestId('loading-container')
        ).toBeInTheDocument();
    });
})
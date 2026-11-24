import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import routes from './routes';
import { createMemoryRouter, RouterProvider } from 'react-router';

describe('App routing', () => {
  it('Visiting / renders the Home Page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/']
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', { name: 'Welcome to Bibili.' })
    ).toBeInTheDocument();
  });

  it('Visiting /shop renders the Shop Page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/shop']
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', { name: 'All Products' })
    ).toBeInTheDocument();
  });

  it('Visiting /cart renders the Cart Page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/cart']
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', { name: 'Your cart is empty' })
    ).toBeInTheDocument();
  });

  it('Visiting a wrong URL renders the NotFound Page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/dddddddddsdsdaaaaaaa']
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', { name: "We couldn't find the page you're looking for." })
    ).toBeInTheDocument();
  });
});
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ShopList from './ShopList';
import userEvent from "@testing-library/user-event";

const mockProducts = [
    {
        id: 1,
        title: 'Test Product 1',
        price: 20,
        image: 'https://example.com/product.jpg',
        stock: 4
    },
    {
        id: 2,
        title: 'Test Product 2',
        price: 30,
        image: 'https://example.com/product.jpg',
        stock: 9
    }
];

describe('Quantity Buttons', () => {
    it('Displays a default quantity of 1', () => {
        render(<ShopList items={mockProducts}/>);

        const productImage = screen.getByRole('img', {
            name: 'Test Product 1'
        });

        const product = productImage.parentElement.parentElement;

        expect(
            within(product).getByRole('spinbutton', {name: 'Quantity'})
        ).toHaveValue(1);
    })

    it('Increases quantity when clicking the plus button', async () => {
        const user = userEvent.setup();

        render(<ShopList items={mockProducts}/>);

        const productImage = screen.getByRole('img', {
            name: 'Test Product 1'
        });

        const product = productImage.parentElement.parentElement;

        const plusButton = within(product).getByRole('button', { name: '+' });

        await user.click(plusButton);

        expect(
            within(product).getByRole('spinbutton', {name: 'Quantity'})
        ).toHaveValue(2);
    })

    it('Descreases quantity when clicking the minus button', async () => {
        const user = userEvent.setup();

        render(<ShopList items={mockProducts}/>);

        const productImage = screen.getByRole('img', {
            name: 'Test Product 1'
        });

        const product = productImage.parentElement.parentElement;

        const plusButton = within(product).getByRole('button', { name: '+' });
        const minusButton = within(product).getByRole('button', { name: '-' });

        await user.click(plusButton);

        await user.click(minusButton);

        expect(
            within(product).getByRole('spinbutton', {name: 'Quantity'})
        ).toHaveValue(1);
    })
})
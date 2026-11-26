import styles from './CartList.module.css';
import CartItem from './CartItem';

import { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';

export default function CartList(){
    const { cart, items, setItems, setCart } = useContext(ProductsContext);

    const total = cart.reduce((sum, cartItem) => {
        const product = items.find((item) => item.id === cartItem.id);

        return sum + (product.price * cartItem.quantity);
    }, 0);

    function handleCheckout() {
        const updatedItems = items
            .map((product) => {
                const cartItem = cart.find(
                    (cartItem) => cartItem.id === product.id
                );

                if (!cartItem) return product;

                return {
                    ...product,
                    stock: product.stock - cartItem.quantity
                };
            })
            .filter((product) => product.stock > 0);

        setItems(updatedItems);
        setCart([]);
    }
    
    return(
        <div className={styles.cart}>
            <div className={styles.cartList}>
                {cart.map((cartItem) => {
                    const product = items.find(
                        (item) => item.id === cartItem.id
                    );

                    return (
                        <CartItem
                            key={cartItem.id}
                            item={product}
                            quantity={cartItem.quantity}
                        />
                    );
                })}
            </div>

            <div className={styles.totalContainer}>
                <h4>Order Summary</h4>
                <hr></hr>
                <div className={styles.total}>
                    <p>Total</p>
                    <p className={styles.totalPrice}>₱{total.toFixed(2)}</p>
                </div>
                <button className={styles.checkOutButton}  onClick={handleCheckout}>
                    Proceed to Checkout 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right preview-icon"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
            </div>
        </div>
        
    )
}
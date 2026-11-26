import styles from './CartList.module.css';

import { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';

export default function CartItem({ item, quantity }) {
    const { cart, setCart } = useContext(ProductsContext);

    function handleQuantityChange(newQuantity) {
        if (newQuantity < 1) {
            setCart(cart.filter((cartItem) => cartItem.id !== item.id));
            return;
        }

        setCart(cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: Math.min(item.stock, newQuantity) };
            }

            return cartItem;
        }));
    }

    function handleDelete() {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    }

    return (
        <div className={styles.cartCard}>
            <div className={styles.productImage}>
                <img src={item.image} alt={item.title} />
            </div>

            <div className={styles.productDesc}>
                <div className={styles.productNameAndCat}>
                    <div className={styles.productCategory}>
                        {item.category}
                    </div>

                    <div className={styles.productName}>
                        {item.title}
                    </div>
                </div>

                <div className={styles.productSetQuantity}>
                    <button
                        className={styles.minusQuantity}
                        onClick={() => handleQuantityChange(quantity - 1)}
                    >
                        -
                    </button>

                    <input type="number" value={quantity} readOnly />

                    <button
                        className={styles.plusQuantity}
                        onClick={() => handleQuantityChange(quantity + 1)}
                    >
                        +
                    </button>
                </div>

                <button className={styles.productDelete} onClick={handleDelete} aria-label={`Remove ${item.title} from cart`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash preview-icon"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>

                <div className={styles.productPrice}>
                    <p className={styles.productEachPrice}>
                        ${item.price.toFixed(2)} / each
                    </p>

                    <p className={styles.productTotalPrice}>
                        ${(item.price * quantity).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}
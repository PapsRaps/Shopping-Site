import styles from './Cart.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CartList from '../../components/CartList/CartList'
import EmptyCart from '../../components/EmptyCart/EmptyCart'

import { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';

export default function Cart(){
    const { cart, setCart } = useContext(ProductsContext);

    return(
        <div className={styles.cartScreen}>
            <Header></Header>
            <div className={styles.cartList}>
                {cart.length === 0 ? <EmptyCart></EmptyCart>
                : <div className={`container ${styles.cartListContent}`}>
                    <div className={styles.cartHeader}>
                        <div className={styles.cartTitle}>
                            <h2>Shopping Cart</h2>
                            <p>({cart.reduce((total, item) => total + item.quantity, 0)} items in cart)</p>
                        </div>
                    </div>
                    <CartList></CartList>
                </div>
                }
            </div>
            <Footer></Footer>
        </div>
    )
}
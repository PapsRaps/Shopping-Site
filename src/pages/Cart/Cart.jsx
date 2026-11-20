import styles from './Cart.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CartList from '../../components/CartList/CartList'
import EmptyCart from '../../components/EmptyCart/EmptyCart'

export default function Cart(){
    return(
        <div className={styles.cartScreen}>
            <Header></Header>
            <div className={styles.cartList}>
                {/* <div className={`container ${styles.cartListContent}`}>
                    <div className={styles.cartHeader}>
                        <div className={styles.cartTitle}>
                            <h2>Shopping Cart</h2>
                            <p>(4 items in cart)</p>
                        </div>
                    </div>
                    <CartList></CartList>
                </div> */}
                <EmptyCart></EmptyCart>
            </div>
            <Footer></Footer>
        </div>
    )
}
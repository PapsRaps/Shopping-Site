import styles from './CartList.module.css'
import testImage from '../../assets/unnamed.jpg'

export default function CartList(){
    return(
        <div className={styles.cart}>
            <div className={styles.cartList}>
                <div className={styles.cartCard}>
                    <div className={styles.productImage}>
                        <img src={testImage}></img>
                    </div>
                    <div className={styles.productDesc}>
                        <div className={styles.productNameAndCat}>
                            <div className={styles.productCategory}>
                                Canvas & hardware
                            </div>
                            <div className={styles.productName}>
                                Fjallraven Foldsack No. 1 Backpack
                            </div>
                        </div>
                        <div className={styles.productSetQuantity}>
                            <button className={styles.minusQuantity}>-</button>
                            <input type='number'></input>
                            <button className={styles.plusQuantity}>+</button>
                        </div>
                        <button className={styles.productDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash preview-icon"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                        <div className={styles.productPrice}>
                            <p className={styles.productEachPrice}>P109.95 / each</p>
                            <p className={styles.productTotalPrice}>P109.95</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cartCard}>
                    <div className={styles.productImage}>
                        <img src={testImage}></img>
                    </div>
                    <div className={styles.productDesc}>
                        <div className={styles.productNameAndCat}>
                            <div className={styles.productCategory}>
                                Canvas & hardware
                            </div>
                            <div className={styles.productName}>
                                Fjallraven Foldsack No. 1 Backpack
                            </div>
                        </div>
                        <div className={styles.productSetQuantity}>
                            <button className={styles.minusQuantity}>-</button>
                            <input type='number'></input>
                            <button className={styles.plusQuantity}>+</button>
                        </div>
                        <button className={styles.productDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash preview-icon"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                        <div className={styles.productPrice}>
                            <p className={styles.productEachPrice}>P109.95 / each</p>
                            <p className={styles.productTotalPrice}>P109.95</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.totalContainer}>
                <h4>Order Summary</h4>
                <hr></hr>
                <div className={styles.total}>
                    <p>Total</p>
                    <p className={styles.totalPrice}>P322.55</p>
                </div>
                <button className={styles.checkOutButton}>
                    Proceed to Checkout 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right preview-icon"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
            </div>
        </div>
        
    )
}
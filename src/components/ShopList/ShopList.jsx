import styles from './ShopList.module.css'

export default function ShopList({items}){
    return(
        <div className={styles.shopList}>
            <div className={`container ${styles.shopListContent}`}>
                {items.map((item) => (
                    <div key={item.id} className={styles.productCard}>
                        <div className={styles.imageContainer}>
                            <img className={styles.productImage} src={item.image} alt={item.title} />
                        </div>
                        <div className={styles.productDesc}>
                            <div className={styles.productName}>{item.title}</div>
                            <div className={styles.productPrice}>${item.price}</div>
                            <hr></hr>
                            <div className={styles.productQuantity}>
                                <p>QTY: </p>
                                <div className={styles.productSetQuantity}>
                                    <button className={styles.minusQuantity}>-</button>
                                    <input type='number'></input>
                                    <button className={styles.plusQuantity}>+</button>
                                </div>
                            </div>
                            <button className={styles.addToCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket preview-icon"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
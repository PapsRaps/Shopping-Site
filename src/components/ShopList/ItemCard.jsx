import styles from './ShopList.module.css';
import { useState, useRef } from 'react';

import { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';

export default function ItemCard({ item }) {
    const { cart, setCart, cartButtonRef } = useContext(ProductsContext);

    const [quantity, setQuantity] = useState(1);
    const [stockError, setStockError] = useState('')

    const productImageRef = useRef(null);

    function handleOnClick(){
        const id = item.id;
        const cartItem = cart.find((item)=> item.id === id)
        if(cartItem === undefined){
            setCart([...cart, { id: item.id, quantity: quantity }])
            flyProduct();
        }else{
            const remainingStock = item.stock - cartItem.quantity;
            if(remainingStock - quantity < 0){
                setStockError(
                    remainingStock === 0
                        ? `All available stock (${item.stock}) is already in your cart.`
                        : `Only ${remainingStock} more available (${cartItem.quantity} already in cart).`
                );
            }else{
                setStockError(''); 
                setCart(cart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity + quantity};
                    }
                    return cartItem;
                }));
                flyProduct();
            }
        }
    }

    function flyProduct(){
        const flyingImage = productImageRef.current.cloneNode(true);
        const rect = productImageRef.current.getBoundingClientRect();
        const cartRect = cartButtonRef.current.getBoundingClientRect();

        flyingImage.classList.add(styles.flyingImage);

        flyingImage.style.left = `${rect.left}px`;
        flyingImage.style.top = `${rect.top}px`;
        flyingImage.style.width = `${rect.width}px`;
        flyingImage.style.height = `${rect.height}px`;

        document.body.appendChild(flyingImage);

        const targetX =
            cartRect.left + cartRect.width / 2 -
            (rect.left + rect.width / 2);

        const targetY =
            cartRect.top + cartRect.height / 2 -
            (rect.top + rect.height / 2);

        requestAnimationFrame(() => {
            flyingImage.style.transform = `translate(${targetX}px, ${targetY}px) scale(0.2)`;
            flyingImage.style.opacity = '0';
        });

        flyingImage.addEventListener('transitionend', () => {
            flyingImage.remove();
        }, { once: true });
    }

    return (
        <div className={styles.productCard} data-product-id={item.id}>
            <div className={styles.imageContainer}>
                <img
                    ref={productImageRef}
                    className={styles.productImage}
                    src={item.image}
                    alt={item.title}
                />
            </div>

            <div className={styles.productDesc}>
                <div className={styles.productName}>{item.title}</div>
                <div className={styles.productPrice}>${item.price}</div>

                {item.stock <= 3 ?
                    <div className={`${styles.stockStatus} ${styles.lowStock}`}>
                        <span className={styles.stockDot}></span>
                        <span>Only {item.stock} left in stock</span>
                    </div>
                : 
                    <div className={`${styles.stockStatus} ${styles.standardStock}`}>
                        <span className={styles.stockDot}></span>
                        <span>{item.stock} left in stock</span>
                    </div>
                }

                <hr />

                <div className={styles.productQuantity}>
                    <p>QTY: </p>

                    <div className={styles.productSetQuantity}>
                        <button
                            className={styles.minusQuantity}
                            onClick={() => {
                                setQuantity(prev => Math.max(1, prev - 1)); 
                                setStockError('');
                            }}
                        >
                            -
                        </button>

                        <input
                            type="number"
                            aria-label="Quantity"
                            min={1}
                            max={item.stock}
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(Math.min(item.stock, Math.max(1, Number(e.target.value))));
                                setStockError('');
                            }}
                        />

                        <button
                            className={styles.plusQuantity}
                            onClick={() => {
                                setQuantity(prev => Math.min(item.stock, prev + 1)); 
                                setStockError('');
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>

                {stockError && (
                    <div className={styles.stockError}>
                        {stockError}
                    </div>
                )}

                <button className={styles.addToCart} onClick={()=>handleOnClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket preview-icon"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
import styles from './Shop.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ShopList from '../../components/ShopList/ShopList'
import LoadingList from '../../components/LoadingList/LoadingList'
import EmptyShop from '../../components/EmptyShop/EmptyShop'

import { useEffect, useState } from 'react'

export default function Shop(){
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchItems() {
            try{
                const response = await fetch('https://fakestoreapi.com/products');

                if (!response.ok) {
                    const error = new Error(`HTTP Error: ${response.status}`);
                    error.status = response.status;
                    throw error;
                }

                const data = await response.json();

                const productsWithQuantity = data.map(item => ({
                    ...item,
                    stock: Math.floor(Math.random() * 15) + 1
                }));

                setItems(productsWithQuantity);
            }catch(error){
                let msg = 'Unable to connect. Please check your internet connection.';
                if (error.name === 'SyntaxError') {
                    msg = 'We received an unexpected response. Please try again.'
                }else if(error.status === 404){
                    msg = "We couldn't find the shop information. Please try again."
                }else if(error.status === 400){
                    msg = "We couldn't process your request. Please try again."
                }else if(error.status === 429){
                    msg = "Too many requests. Please wait a moment and try again."
                }else if(error.status >= 500 && error.status <= 599){
                    msg = "Our product service is temporarily unavailable."
                }
                setError(msg);
            }finally{
                setIsLoading(false)
            }

        }

        fetchItems();
    },[]);

    let shopDesc;

    if(isLoading){
        shopDesc = <div className={styles.shopDesc} data-testid="loading-container">
                        <span className={styles.pulseDot}></span>
                        Loading
                    </div>
    }else if(error !== null){
        shopDesc = <div className={styles.shopDesc} data-testid="loading-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-off preview-icon"><path d="M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057"/><path d="M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78"/><path d="m2 2 20 20"/></svg>
                        Service Unavailable
                    </div>
    }else{
        shopDesc = <div className={styles.shopDesc} data-testid="loading-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package preview-icon"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>
                        {items.length} Products Available
                    </div>
    }

    return(
        <div className={styles.shopScreen}>
            <Header></Header>
            <div className={styles.shopHeader}>
                <div className={`container ${styles.shopHeaderContent}`}>
                    <div className={styles.shopTitle}>
                        <h2>All Products</h2>
                        <p>Explore our full range of items.</p>
                    </div>
                    {shopDesc}
                </div>
            </div>
            {isLoading ? <LoadingList/>
            : error !== null ?  <EmptyShop error={error}/>
            : <ShopList items={items}/>}
            <Footer></Footer>
        </div>
    )
}
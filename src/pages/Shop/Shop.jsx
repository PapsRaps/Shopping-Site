import styles from './Shop.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ShopList from '../../components/ShopList/ShopList'

export default function Shop(){
    return(
        <>
            <Header></Header>
            <div className={styles.shopHeader}>
                <div className={`container ${styles.shopHeaderContent}`}>
                    <div className={styles.shopTitle}>
                        <h2>All Products</h2>
                        <p>Explore our full range of items.</p>
                    </div>
                    <div className={styles.shopDesc}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package preview-icon"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>
                        9 Products Available
                    </div>
                </div>
            </div>
            <ShopList></ShopList>
            <Footer></Footer>
        </>
    )
}
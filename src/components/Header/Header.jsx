import styles from './Header.module.css'
import { Link, useNavigate } from "react-router"

export default function Header(){
    const navigate = useNavigate();

    return(
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <h1>Bibili</h1>
                <nav className={styles.headerLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
                <button className={styles.headerCart} aria-label="Shopping cart" onClick={()=>navigate('/cart')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket preview-icon"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
                    <div className={styles.cartNotif}>3</div>
                </button>
            </div>
        </header>
    )
}
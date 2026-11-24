import styles from './Footer.module.css'
import { Link } from "react-router"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerLeft}>
                    <h3>Bibili</h3>
                    <div className={styles.footerTextBorder}>—</div>
                    <div className={styles.footerDesc}>Bumili ka na.</div>
                </div>
                <div className={styles.footerRight}>
                    <nav className={styles.footerLinks}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/shop'}>Shop</Link>
                        <Link to={'/cart'}>Cart</Link>
                    </nav>
                    <div className={styles.footerTextBorder}>|</div>
                    <div className={styles.footerDesc}>© 2026 Bibili Na Ako Co. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}
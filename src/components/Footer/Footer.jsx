import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerLeft}>
                    <h3>Bibili</h3>
                    <div className={styles.footerTextBorder}>—</div>
                    <div className={styles.footerDesc}>Bumili ka.</div>
                </div>
                <div className={styles.footerRight}>
                    <nav className={styles.footerLinks}>
                        <a href=''>Home</a>
                        <a href=''>Shop</a>
                        <a href=''>Cart</a>
                    </nav>
                    <div className={styles.footerTextBorder}>|</div>
                    <div className={styles.footerDesc}>© 2026 Bibili Na Ako Co. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}
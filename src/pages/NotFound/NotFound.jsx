import styles from './NotFound.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from "react-router"

export default function NotFound(){
    const navigate = useNavigate();

    return(
        <>
            <Header></Header>
            <div className={`container ${styles.notFoundContent}`}>
                <div className={styles.errorNum}>404</div>
                <div className={styles.errorDesc}>Page not found</div>
                <h2>We couldn't find the page you're looking for.</h2>
                <p>The link might be broken, moved, or no longer available. Press the button below to head back.</p>
                <button className={styles.returnButton} onClick={()=>navigate('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    Return to homepage
                </button>
            </div>
            <Footer></Footer>
        </>
    )
}
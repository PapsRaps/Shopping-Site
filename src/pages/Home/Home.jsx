import styles from './Home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HomapageImage from '../../assets/HomepageImage.jpg'
import { useNavigate } from "react-router"

export default function Home(){
    const navigate = useNavigate();

    return(
        <>
            <Header></Header>
            <div className={`container ${styles.homeContent}`}>
                <div className={styles.homeLeft}>
                    <div className={styles.homeEyebrow}>Practice Lang To</div>
                    <h2>Welcome to Bibili.</h2>
                    <p>Discover clothing, accessories, and everyday essentials picked to bring a little something special to your day.</p>
                    <button className={styles.homeButton} onClick={()=>navigate('/shop')}>
                        Browse Items 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right preview-icon"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                </div>
                <div className={styles.homeRight}>
                    <img src={HomapageImage} alt='Still life photography of an oak table with coffee, wallet, keys and sunglasses.'></img>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
import styles from './LoadingList.module.css';

export default function LoadingList() {
    const skeletonCards = Array.from({ length: 6 });

    return (
        <div className={`container ${styles.loadingListContainer}`}>
            <div className={styles.skeletonGrid}>
                {skeletonCards.map((_, index) => (
                    <div key={index} className={styles.skeletonCard}>
                        <div className={`${styles.skeletonPulse} ${styles.skeletonImage}`} />

                        <div className={styles.cardDetails}>
                            <div className={`${styles.skeletonPulse} ${styles.skeletonTag}`} />

                            <div className={`${styles.skeletonPulse} ${styles.skeletonTitle}`} />
                            <div className={`${styles.skeletonPulse} ${styles.skeletonDesc}`} />

                            <div className={styles.cardFooter}>
                                <div className={`${styles.skeletonPulse} ${styles.skeletonPrice}`} />
                                <div className={`${styles.skeletonPulse} ${styles.skeletonButton}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import styles from './ShopList.module.css'
import ItemCard from './ItemCard';

export default function ShopList({items}){
    return(
        <div className={styles.shopList}>
            <div className={`container ${styles.shopListContent}`}>
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
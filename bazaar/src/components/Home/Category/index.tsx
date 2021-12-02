import { Category } from '../../../types/categories';
import styles from './categoryCard.module.css';

interface categoryCard {
    category: Category,
    index: number
}
function CategoryCard(props: categoryCard) {
    const categoryObj = props.category;
    const order = props.index % 2 === 0 ? 0 : 1;
    return (
        <div className={styles.categoryContainer} >
            <div className={styles.firstSection} style = {{ order : order}} >
                <img src={categoryObj.imageUrl} alt='pic' className={styles.image} />
            </div>
            <div className={styles.secondSection} >
                <h4 className={styles.cartHeading} >{categoryObj.name}</h4>
                <p className={styles.cartPara}>{categoryObj.description}</p>
                <div className={styles.exporeNow}>
                    <a href={`/signIn`}>
                        Explore {categoryObj.name}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;


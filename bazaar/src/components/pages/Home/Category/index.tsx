import { useNavigate } from 'react-router-dom';
import { Category } from '../../../../types/categories';
import styles from './categoryCard.module.css';

interface categoryCard {
    category: Category,
    index: number
}
function CategoryCard(props: categoryCard) {
    const navigate = useNavigate();
    const categoryObj = props.category;
    const order = props.index % 2 === 0 ? 0 : 1;

    const clickHandler = (catId : string) => {
        navigate(`/products?${catId}`)
    }
    
    return (
        <div className={styles.categoryContainer} >
            <div className={styles.firstSection} style = {{ order : order}} >
                <img src={categoryObj.imageUrl} alt='pic' className={styles.image} />
            </div>
            <div className={styles.secondSection} >
                <h4 className={styles.cartHeading} >{categoryObj.name}</h4>
                <p className={styles.cartPara}>{categoryObj.description}</p>
                <div className={styles.exporeNow} onClick = {() => clickHandler(categoryObj.id)}>                   
                        Explore {categoryObj.name}                    
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;


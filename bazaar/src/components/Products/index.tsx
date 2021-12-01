import ProductsCategoryList from "../ProductsCategoryList";
import ProductsList from "../ProductsList";
import styles from './products.module.css';

export const Products = () => {    
    return (
        <>
            <h1>Products Page</h1>
            <div className = {styles.productsPageContainer}>
                <div className = {styles.productCategoryContainer}>
                    <ProductsCategoryList />
                </div>
                <div className = {styles.productsListContainer}>
                    <ProductsList />
                </div>    
            </div>
            
        </>        
    )
};
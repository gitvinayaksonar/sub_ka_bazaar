import { Product } from '../../types/product';
import styles from './productCard.module.css';

interface ProductCardProps {
    product : Product
}
function ProductCard(props : ProductCardProps) {    
    const productObj = props.product;    
    
    const clickHandler = (productName : string = 'product') => {
        alert(`In Cart : ${productName}`)
    }

    return (
        <div className = { styles.productCardContainer } >
            <h6 className = {styles.productHeading}> {productObj.name} </h6>
            <img src = {productObj.imageURL} alt = 'pic' className = {styles.image} />
            <p className = {styles.productDetails}>{productObj.description}</p>
            <div className = { styles.mrpBuyNowContainer}>
                <p className = { styles.mrp}> {`MRP Rs.${productObj.price}`} </p>
                <div onClick = {() => clickHandler(productObj.name)}>
                    <p className = { styles.buyNow}> Buy Now </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;


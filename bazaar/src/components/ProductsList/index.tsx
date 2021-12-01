import { useEffect } from "react";
import { connect } from "react-redux"
import { Dispatch } from "redux";
import { fetchProductsList } from "../../redux/actions";
import { AppState } from "../../redux/store/configureStore";
import { AppActions } from "../../types/actions";
import { Product } from "../../types/product";
import ProductCard from "../ProductCard";
import styles from './productList.module.css'


interface ProductsListProps {
    color?: string
}

type Props = ProductsListProps & LinkStateProps & LinkDispatchProps;

function ProductsList({products, fetchProductsList} : Props) {

    useEffect(() => {
        fetchProductsList("")        
    }, [fetchProductsList])

    const renderContent = () => {
        return (
            <div className = {styles.productListContainer}>
                {
                    products.map((eachProduct) => {
                        return <ProductCard product = { eachProduct } key = { eachProduct.id } />
                    })
                }
            </div>
    )}

    return (
        <div>
            {
                renderContent()
            }
        </div>
    )
}


interface LinkStateProps {
    products : Product[]
}
  
interface LinkDispatchProps {
    fetchProductsList : (catId : string) => void;
}

const mapStateToProps = (state : AppState, ownProps : ProductsListProps):LinkStateProps => ({
    products: state.products
});

const mapDispatchToProps = (dispatch : Dispatch<AppActions>, ownProps : ProductsListProps):LinkDispatchProps => ({
    fetchProductsList: (catId) => dispatch(fetchProductsList(catId)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
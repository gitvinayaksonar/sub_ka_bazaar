import { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchCategoryList, fetchProductsList } from "../../redux/actions";
import { AppState } from "../../redux/store/configureStore";
import { AppActions } from "../../types/actions";
import { Category } from "../../types/category";
import styles from './productsCategoryList.module.css';

interface ProductsCategoryListProps {
    color?: string
}

type Props = ProductsCategoryListProps & LinkStateProps & LinkDispatchProps;

function ProductsCategoryList({categories, fetchCategoryList, fetchProductsList} : Props) {

    useEffect(() => {               
        fetchCategoryList()
    }, [fetchCategoryList])

    const clickHandler = (catId : string):void => {
        fetchProductsList(catId)
    }
    
    const renderContent = () => {
        return categories.map((eachCategoryObj) => {
            return <div onClick = {() => clickHandler(eachCategoryObj.id)} className = {styles.categoryTile} key = {eachCategoryObj.id}> {eachCategoryObj.name} </div>
        })
    }
    
    return (
        <div>
            { renderContent() }
        </div>
    )
}


interface LinkStateProps {
    categories : Category[]
}

interface LinkDispatchProps {
    fetchCategoryList : () => void;
    fetchProductsList : (catId : string) => void;
}

const mapStateToProps = (state : AppState, ownProps : ProductsCategoryListProps):LinkStateProps => {
    return {
        categories : state.categories
    }
}

const mapDispatchToProps = (dispatch : Dispatch<AppActions>, ownProps : ProductsCategoryListProps):LinkDispatchProps => {
    return {
        fetchCategoryList : () => dispatch(fetchCategoryList()),
        fetchProductsList : (catId) => dispatch(fetchProductsList(catId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCategoryList);
import { FetchProductsAction } from '../../types/actions';
import { Product } from '../../types/product';
 
const productsReducerDefaultState:Product[] = [];

const productsReducer = (state = productsReducerDefaultState, action : FetchProductsAction):Product[] => {
    switch (action.type){
        case 'FETCH_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}

export default productsReducer;
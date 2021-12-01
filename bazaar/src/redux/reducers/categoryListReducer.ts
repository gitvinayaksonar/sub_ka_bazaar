import { FetchCategories } from '../../types/actions';
import { Category } from '../../types/categories';
 
const defaultState:Category[] = [];

const categoriesReducer = (state = defaultState, action : FetchCategories):Category[] => {
    switch (action.type){
        case 'FETCH_CATEGORY_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default categoriesReducer;
import { FetchCategoryListAction } from "../../types/actions";
import { Category } from "../../types/category";

const categoriesReducerDefaultState:Category[] = [];

const categoriesReducer = (state = categoriesReducerDefaultState, action: FetchCategoryListAction) => {
    switch (action.type){
        case 'FETCH_CATEGORIES':
            return action.payload;
        default:
            return state;
    }
}

export default categoriesReducer;
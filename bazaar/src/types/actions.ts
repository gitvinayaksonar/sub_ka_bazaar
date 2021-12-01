import { Category } from "./category";
import { Product } from "./product";

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';


export interface FetchCategoryListAction {
    type : typeof FETCH_CATEGORIES,
    payload : Category[]
}

export interface FetchProductsAction {
    type : typeof FETCH_PRODUCTS;
    payload : Product[];
}


export type AppActions = FetchCategoryListAction | FetchProductsAction;
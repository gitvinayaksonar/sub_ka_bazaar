import { Product } from "./product";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export interface FetchProductsAction {
    type : typeof FETCH_PRODUCTS;
    payload : Product[];
}

export type AppActions = FetchProductsAction;
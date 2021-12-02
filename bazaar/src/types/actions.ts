import { Product } from "./product";
import { Banner } from "./banner";
import { Category } from "./categories";

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_BANNERS = 'FETCH_BANNERS';
export const FETCH_LOGIN_DETAILS = 'FETCH_LOGIN_DETAILS';

export interface FetchCategoryListAction {
    type : typeof FETCH_CATEGORIES,
    payload : Category[]
}

export interface FetchProductsAction {
    type: typeof FETCH_PRODUCTS;
    payload: Product[];
}

export interface FetchBanners {
    type: typeof FETCH_BANNERS;
    payload: Banner[];
}

export interface FetchLoginDetails  {
    type: typeof FETCH_LOGIN_DETAILS;
    payload: {username:string, password:string};
}

export type AppActions = FetchCategoryListAction | FetchProductsAction;
export type FetchBanner = FetchBanners;
export type FetchLogin = FetchLoginDetails;


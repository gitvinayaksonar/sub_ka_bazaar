import { Product } from "./product";
import { Banner } from "./banner";
import { Category } from "./categories";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_BANNERS = 'FETCH_BANNERS';
export const FETCH_CATEGORY_LIST = 'FETCH_CATEGORY_LIST';
export const FETCH_LOGIN_DETAILS = 'FETCH_LOGIN_DETAILS';


export interface FetchProductsAction {
    type: typeof FETCH_PRODUCTS;
    payload: Product[];
}

export interface FetchBanners {
    type: typeof FETCH_BANNERS;
    payload: Banner[];
}

export interface FetchCategories  {
    type: typeof FETCH_CATEGORY_LIST;
    payload: Category[];
}

export interface FetchLoginDetails  {
    type: typeof FETCH_LOGIN_DETAILS;
    payload: {username:string, password:string};
}

export type AppActions = FetchProductsAction;
export type FetchBanner = FetchBanners;
export type FetchCategory = FetchCategories;
export type FetchLogin = FetchLoginDetails;


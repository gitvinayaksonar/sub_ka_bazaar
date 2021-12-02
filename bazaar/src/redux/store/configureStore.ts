import { createStore, combineReducers } from "redux";
import bannersReducer from "../reducers/bannersReducer";
import loginReducer from "../reducers/loginReducer";
import categoriesReducer from "../reducers/categoriesReducer";
import productsReducer from '../reducers/productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  banners: bannersReducer,
  categories: categoriesReducer,
  rootUser: loginReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);



import { createStore, combineReducers } from "redux";
import bannersReducer from "../reducers/bannersReducer";
import categoriesReducer from "../reducers/categoryListReducer";
import loginReducer from "../reducers/loginReducer";
import categoriesReducer2 from "../reducers/categoriesReducer";
import productsReducer from '../reducers/productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  banners: bannersReducer,
  categores: categoriesReducer,
  rootUser: loginReducer,
  categories : categoriesReducer2
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);



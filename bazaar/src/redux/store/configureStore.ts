import { createStore, combineReducers } from "redux";
import bannersReducer from "../reducers/bannersReducer";
import categoriesReducer from "../reducers/categoryListReducer";
import productsReducer from '../reducers/productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  banners: bannersReducer,
  categores: categoriesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);



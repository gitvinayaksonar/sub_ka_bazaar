import { createStore, combineReducers } from "redux";
import categoriesReducer from "../reducers/categoriesReducer";
import productsReducer from '../reducers/productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  categories : categoriesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);



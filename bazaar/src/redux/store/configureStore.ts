import { createStore, combineReducers } from "redux";
import productsReducer from '../reducers/productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);



import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../Reducers/Index";
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;

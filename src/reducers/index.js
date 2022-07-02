import { combineReducers } from "redux"; 
import ProductReducer from "./ProductReducer";

const Reducers = combineReducers({
    products: ProductReducer
})

export default Reducers

import productReducer from './ProductReducers';
import cartReducer from './CartReducers';
import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});
 
export default rootReducer;
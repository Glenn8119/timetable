import { combineReducers } from "redux";
import priceReducer from "./priceReducer";
import timeReducer from "./timeReducer";
import getSelectedTimeReducer from "./getSelectedTimeReducer";
import getSelectedDateReducer from "./getSelectedDateReducer";
import setCartState from "./setCartState";
import localStorageReducer from "./localStorageReducer";

export default combineReducers({
    time : timeReducer,
    price: priceReducer,
    selectedTime: getSelectedTimeReducer,
    selectedDate: getSelectedDateReducer,
    cartState : setCartState,
    storageArr : localStorageReducer
}) 
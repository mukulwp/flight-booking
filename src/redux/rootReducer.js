import { combineReducers } from "redux";
import bookingReducer from "./book/reducer";

const rootReducer = combineReducers({
    books: bookingReducer,
});
export default rootReducer;
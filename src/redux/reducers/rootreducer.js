import allReducers from "./allReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userInfo:allReducers
});
export default rootReducer;
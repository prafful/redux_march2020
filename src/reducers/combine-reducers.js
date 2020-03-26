import { combineReducers } from "redux";
import taxiData from "./reducer-taxi";
import taxiService from "./reducer-taxiservice";

const allTaxiReducers = combineReducers({
    alltaxinames: taxiData,
    alltaxiservices: taxiService
})

export default allTaxiReducers
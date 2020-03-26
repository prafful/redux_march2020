import { combineReducers } from "redux";
import taxiData from "./reducer-taxi";
import taxiService from "./reducer-taxiservice";
import taxiNameClickedAndActionReceived from "./reducer-taxiname_clicked";

const allTaxiReducers = combineReducers({
    alltaxinames: taxiData,
    alltaxiservices: taxiService,
    taxiClicked:taxiNameClickedAndActionReceived
})

export default allTaxiReducers
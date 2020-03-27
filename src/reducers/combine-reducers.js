import { combineReducers } from "redux";
import taxiData from "./reducer-taxi";
import taxiService from "./reducer-taxiservice";
import taxiNameClickedAndActionReceived from "./reducer-taxiname_clicked";
import taxiNameDoubleClickedAndActionReceived from "./reducer-taxiname_doubleclicked";

const allTaxiReducers = combineReducers({
    alltaxinames: taxiData,
    alltaxiservices: taxiService,
    taxiClicked:taxiNameClickedAndActionReceived,
    taxiDoubleClicked: taxiNameDoubleClickedAndActionReceived
})

export default allTaxiReducers
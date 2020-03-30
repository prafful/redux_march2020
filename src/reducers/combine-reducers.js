import { combineReducers } from "redux";
import taxiService from "./reducer-taxiservice";
import taxiNameClickedAndActionReceived from "./reducer-taxiname_clicked";
import taxiNameDoubleClickedAndActionReceived from "./reducer-taxiname_doubleclicked";
import taxiLikeChangeAndActionReceived from "./reducer-taxilikechange";
import getRemoteUsers from "./reducer-remoteuser";

const allTaxiReducers = combineReducers({
    alltaxinames: taxiLikeChangeAndActionReceived,
    alltaxiservices: taxiService,
    taxiClicked:taxiNameClickedAndActionReceived,
    taxiDoubleClicked: taxiNameDoubleClickedAndActionReceived,
    taxiLikeChange: taxiLikeChangeAndActionReceived,
    remoteUsers: getRemoteUsers
})

export default allTaxiReducers
export default function taxiLikeChangeAndActionReceived(state = null, action) {
    console.log("Dispatched like change action is received!");
    console.log(action);
    if (action != null) {
        switch (action.type) {
            case 'TAXI_LIKE_CHANGE':
                console.log("Taxi like needs to be changed: " + JSON.stringify(action.payload));
                action.payload.likes = action.payload.likes + 1
                console.log(action.payload);
                return action.payload

            default:
                break;
        }
    }


    return state

}
const taxiNameClickedActionAndDispatched = function(taxi){
    console.log("In action creator");
    console.log(taxi);
    return ({
        type:'TAXI_NAME_CLICKED',
        payload: taxi
    })
}

export default taxiNameClickedActionAndDispatched
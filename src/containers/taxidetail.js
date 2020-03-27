import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import taxiLikeChangeButtonClickedAndDispatched from '../actions/taxiLikeChangeButtonClickedAction';

class TaxiDetailContainer extends React.Component {
    state = {  }
    render() { 
        if(this.props.showTaxiDetail === null){
            return(
                <h4>Click on taxi name above to read details....</h4>
            )
        }else{
            return ( 
                <div>
                    <h4>Taxi details....</h4>
                    Taxi ID: {this.props.showTaxiDetail.id} <br />
                    Taxi Name: {this.props.showTaxiDetail.name} <br />
                    Taxi Likes: {this.props.showTaxiDetail.likes} 
                                &nbsp; 
                                <button 
                                    onClick={()=>this.props.changeLikes(this.props.showTaxiDetail)}>
                                    Like
                                </button><br />
                    Taxi Dislikes: {this.props.showTaxiDetail.dislikes}  
                                &nbsp; <button>DisLike</button><br />
                    City Present: {this.props.showTaxiDetail.active_city} <br />
                    City Planning: {this.props.showTaxiDetail.city_planning} <br />
                    Reviews Count: {this.props.showTaxiDetail.reviews} <br />

                </div> 
            );
        }
    }
}

function convertTaxiStoreToPropsForDetail(store){
    console.log("Store Received for taxidetail container");
    console.log(store);
    return {
        showTaxiDetail: store.taxiClicked
    }
}

function mapFunctionPropsToActionAndDispatch(dispatch){
    return bindActionCreators({
        changeLikes: taxiLikeChangeButtonClickedAndDispatched
    }, dispatch)
}
 
export default connect(convertTaxiStoreToPropsForDetail, mapFunctionPropsToActionAndDispatch)(TaxiDetailContainer);
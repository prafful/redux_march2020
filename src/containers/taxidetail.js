import React from 'react';
import { connect } from "react-redux";

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
                    Taxi Likes: {this.props.showTaxiDetail.likes} <br />
                    Taxi Dislikes: {this.props.showTaxiDetail.dislikes} <br />
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
 
export default connect(convertTaxiStoreToPropsForDetail)(TaxiDetailContainer);
import React from 'react';
import { connect } from "react-redux";

class TaxiContainer extends React.Component {

    renderTaxiNames = function(){
        console.log(this.props.taxinames);
        return this.props.taxinames.map( taxi => {
            console.log(taxi);
            return(
                <li key={taxi.id}>{taxi.name}</li>
            )
        })
    }

    
    render() { 
        return ( 
            <div>
                <h4>Taxi Names: </h4>
                <ol>
                   {this.renderTaxiNames()}
                </ol>
            </div>
         );
    }
}
 

function convertTaxiStoreToProps(taxi_store_received){
    console.log("Taxi Store Received");
    console.log(taxi_store_received);
    return {
        taxinames: taxi_store_received.alltaxinames
    }

}

export default connect(convertTaxiStoreToProps)(TaxiContainer);
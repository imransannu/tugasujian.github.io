import React, {Component} from 'react';
import './Contentbeli.css';

export default class Contentbeli extends Component{
    render(){
        return(
            <div className="beli">
                <h3 className='h3-beli'><b>Shoping Cart</b></h3>
                <table class="table table-condensed">
                <tr >
                    <th className="th-beli">Item</th>
                    <th className="th-beli">Price</th>
                    <th className="th-beli">Quantity</th>
                    <th className="th-beli">Total</th>
                </tr>
                <tr>
                   
                </tr>
                </table>
            </div>
        );
    }
}
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default function Contentdetail(props){
    return(
        <div>
            <h3 className="h3-content"><strong>Detail Product</strong></h3>
            <div className="tumnail">
             {                
				props.data.map(barang =>
				<table className="table table-condensed">
					 <tr key={barang.id}>
						<td>{process.env.PUBLIC_URL+barang.image}</td>
						<td>{barang.harga}</td>
						<td>{barang.nama_barang}</td>
					</tr>
				</table>
                ) 
                 }
				</div>   
        </div>
    );       
}
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Contentshirt.css';

export default function Contentshirt(props){
    return(
        <div>
            <h3 className="h3-shirt"><strong>Product Shirt</strong></h3>
            <div className="tumnail">
             {                
                props.data.map(barang =>
                <div key={barang.id} className="tumnail">
                     <div className="col-md-4">
                    <div className="thumbnail">
                    <img src={process.env.PUBLIC_URL+barang.image} alt="imsge"/>
                    <center>
                    <div className="caption">
                    <h4>{barang.nama}</h4>
                    <p>{barang.harga}</p>
                    <p>{barang.deskripsi}</p>
                    <p>
                        <Link to="/Beli" className="btn btn-success" role="button">Beli</Link>
                        <Link to="/Detail" className="btn btn-info" role="button">Detail</Link>
                    </p>
                     </div>
                     </center>
                    </div>
                    </div>
                </div>
                ) 
            }
            </div>   
        </div>
    );
}
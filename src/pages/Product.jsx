import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Content from '../components/Content.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/barang.json';

class Product extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="container">
                    <Content data={data}/>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Product;
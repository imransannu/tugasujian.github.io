import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Contentbeli from '../components/Contentbeli.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/barang.json';

class Beli extends Component{
    render(){
        return(
            <div>
             <Navbar />
                <div className="container">
                    <Contentbeli />
                </div>
             <Footer/>
            </div>
        );
    }
}
export default Beli; 
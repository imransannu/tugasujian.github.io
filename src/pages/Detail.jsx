import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Contentdetail from '../components/Contentdetail.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/barang.json';

class Detail extends Component{
    render(){
        return(
            <div>
             <Navbar />
                <div className="container">
                 <div className="row">
                  <div className="col-md-3">
                    <Sidebar />
                  </div>
                <div className="col-md-9">
                        <Contentdetail data={data}/>
                </div>
                </div>
                </div>
             <Footer/>
            </div>
        );
    }
}
export default Detail; 
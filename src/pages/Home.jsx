import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Content from '../components/Content.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/barang.json';


class Home extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Jumbotron />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <Sidebar />
                        </div>
                        <div className="col-md-9">
                        <Content data={data}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Home;
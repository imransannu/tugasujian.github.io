import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Contentshirt from '../components/Contentshirt.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/shirt.json';

class Shirt extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <Contentshirt data ={data}/>                    
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Shirt;
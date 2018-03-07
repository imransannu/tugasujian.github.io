import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Contenttshirt from '../components/Contenttshirt.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/tshirt.json';

class Tshirt extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <Contenttshirt data ={data}/>                    
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Tshirt;
import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Contentacse from '../components/Contentacse.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/acse.json';

class Contacse extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <Contentacse data ={data}/>                    
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Contacse;
import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Contentshorts from '../components/Contentshorts.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/short.json';

class Shorts extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <Contentshorts data ={data}/>                    
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Shorts;
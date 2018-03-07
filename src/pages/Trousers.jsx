import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Contentrousers from '../components/Contentrousers.jsx';
import Footer from '../components/Footer.jsx';

import data from '../components/data/trouser.json';

class Tshirt extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <Contentrousers data ={data}/>                    
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Tshirt;
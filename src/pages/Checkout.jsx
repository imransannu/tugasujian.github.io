import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class Checkout extends Component{
    render(){
        let style = {height: 530};
        let h3 = {background:'lightgreen', textalign:'center', padding:10};
        return(
            <div>
                <Navbar />
                <div className="container" style={style}>
                    <h3 style={h3}>Checklist</h3>
                    <p>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Inventore facere accusamus dolorem 
                        veritatis corporis repellendus ex
                         adipisci! Voluptate sapiente, illum
                          asperiores dicta, voluptatum ab,
                           quos enim cupiditate perspiciatis 
                           laudantium explicabo?
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Checkout;
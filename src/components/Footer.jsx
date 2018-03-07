import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
            <div className="container">
                <p className="text-muted">Powered by @Imran &#169;{new Date().getFullYear()}</p>
            </div>
            </footer>
        );
    }
}
export default Footer;
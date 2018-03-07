import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar">
            <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <h5>MENU</h5>
                </button>
                <Link className="navbar-brand" to="/">Menswear</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                      <li><Link to="/">Home</Link></li>
                      <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="/">Shop<span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                          <li><Link to="/Product">Product</Link></li>
                          <li><Link to="/Checkout">Check out</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/About">About</Link></li>
                      <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/Signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                    <form className="navbar-form navbar-right">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                            <button type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
            </div>
            </nav>
        );
    }
}
export default Navbar
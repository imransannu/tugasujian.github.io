import React, { Component } from 'react';
import './Jumbotron.css'

class Jumbotron extends Component{
    render(){
        return(
            <div className="container">
             <div className="jumbotron"> 
                <h1 className="display-3">Welcome</h1>
                <p className="lead">
                    Get something new here !!
                </p>
             </div>
          </div>
        );
    }
}
export default Jumbotron;
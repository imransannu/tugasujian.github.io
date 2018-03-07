import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Footer from '../components/Footer.jsx';

class About extends Component{

    render(){
        let style = {height: 530};
        let h3 = {background:'lightgreen', textalign:'center', padding:10};
        return(
            <div>
                <Navbar />
                <div className="container" style={style}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <Sidebar />
                        </div>
                        <div className="col-md-9">
                        <h3 style={h3}><strong>About Us</strong></h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Corrupti fugiat, corporis voluptatum aliquam,
                             repudiandae sit voluptas voluptatem quidem nesciunt
                              eligendi ea rerum doloremque, doloribus quam 
                              inventore tenetur delectus architecto. Sit!
                        </p>
                        </div>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default About;
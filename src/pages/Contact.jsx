import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

class Contact extends Component{
    render(){
        let style = {height: 530};
        let h3 = {background:'lightgreen', textalign:'center', padding:'10px', borderradius:10};
        return(
            <div>
                <Navbar />
                <div className="container" style={style}>
                    <div className="row">
                         <div className="col-md-8">
                         <div className="contact-form">
                         <h3 style={h3}><strong>Get Us</strong></h3>
                         <form id="main-contact-form" class="contact-form row" name="contact-form" method="post">
                                <div class="form-group col-md-6">
                                    <input type="text" name="name" class="form-control" required="required" placeholder="Name"/>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="email" name="email" class="form-control" required="required" placeholder="Email"/>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="text" name="subject" class="form-control" required="required" placeholder="Subject" />
                                </div>
                                <div class="form-group col-md-12">
                                    <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="Your Message Here"></textarea>
                                </div>                        
                                <div class="form-group col-md-12">
                                    <input type="submit" name="submit" class="btn btn-info pull-right" value="Submit" />
                                </div>
                            </form>
                         </div>
    
                         </div>
                         <div className="col-md-4">
                         <div className="contact-info">
                            <h3 className="title text-center" style={h3}>Contact Info</h3>
                            <address>
                                <p>Menswears Inc.</p>
                                <p>935 W. Alsintan Streets Sampora, IL 60614, Ind</p>
                                <p>Tangsel Indonesia</p>
                                <p>Mobile: +2346 17 38 93</p>
                                <p>Fax: 1-714-252-0026</p>
                                <p>Email: info@emenswear.com</p>
                            </address>
                            <div className="social-networks">
                                <h3 className="title text-center" style={h3}>Social Networking</h3>
                                <ul>
                                    <li>
                                       <p> <Link to="/fb">Facebook</Link></p>
                                    </li>
                                    <li>
                                        <p><Link to="/in">Instagram</Link></p>
                                    </li>
                                </ul>
                            </div>
                         </div>
                         </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Contact;
import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Checkout from './pages/Checkout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Detail from './pages/Detail.jsx';
import Beli from './pages/Beli.jsx';
import Shirt from './pages/Shirt.jsx';
import Tshirt from './pages/Tshirt.jsx';
import Trousers from './pages/Trousers.jsx';
import Shorts from './pages/Shorts.jsx';
import Acse from './pages/Acse.jsx';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Product" component={Product} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Detail" component={Detail}/>
          <Route path="/Beli" component={Beli}/>
          <Route path="/Shirt" component={Shirt}/>
          <Route path="/Tshirt" component={Tshirt}/>
          <Route path="/Trousers" component={Trousers}/>
          <Route path="/Shorts" component={Shorts}/>
          <Route path="/Acse" component={Acse}/>
        </div>
      </Router>
    );
  }
}
export default App;

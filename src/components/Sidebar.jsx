import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component{
    render(){
        return(
        <div>
            <div className="panel-title">
                <h3 className="h3-sidebar">Categori</h3>
            </div>
            <div className="panel-group" id="lin_acor">
            <div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title" data-target="#panel-1" data-toggle='collapse'
                    data-parent="#lin_acor"><span className="glyphicon glyphicon-plus pull-right"></span>Clotch</h4>
                </div>
                <div className="panel-collapse collapse" id="panel-1">
                        <div className="panel-body">
                            <p className="panel-p"><Link to="/Shirt">Shirt</Link></p>
                            <p className="panel-p"><Link to="/Tshirt">T-Shirt</Link></p>
                        </div>
                </div>
            </div>
            <div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title" data-target="#panel-2" data-toggle='collapse'
                        data-parent="#lin_acor"> <span className="glyphicon glyphicon-plus pull-right"></span> Pants</h4>
                    </div>
                    <div className="panel-collapse collapse" id="panel-2">
                            <div className="panel-body">
                                <p className="panel-p"><Link to="/Trousers">Trousers</Link></p>
                                <p className="panel-p"><Link to="/Shorts">Shorts</Link></p>
                            </div>
                    </div>
            </div>
            <div className="panel">
                    <div className="panel-heading">
                        <h3 className="panel-title"><Link to="/Acse">Accesories</Link></h3>
                    </div>
            </div>
        </div>
        <div class="brands_products">
			<h3 className="h3-sidebar">Brands</h3>
			<div className="brands-name">
				<ul className="nav nav-pills nav-stacked ul-brand">
					<li><span className="pull-right">(5)</span>Billabong</li>
					<li><span className="pull-right">(10)</span>Jeans</li>
                    <li><span className="pull-right">(23)</span>Cardinal</li>
					<li><span className="pull-right">(65)</span>Suckfeed</li>
				</ul>
			</div>
		</div>
        </div>
        );
    }
}
export default Sidebar;
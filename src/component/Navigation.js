import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component{
    render() {
        return <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">Brand</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><NavLink activeClassName="activeLink" exact={true} to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="activeLink" to="/users">Users</NavLink></li>
                            <li><NavLink activeClassName="activeLink" to="/create">Create</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    }
}

export default Navigation;


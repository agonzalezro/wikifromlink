import React, { Component } from 'react'

class Header extends Component {
    render() {
        return <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
            <a className="navbar-brand" href="#nothing-for-now">wikifromlink.com <i class="fas fa-flask"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#nothing-for-now"><strike>Usage</strike></a>
                </li>
            </ul>
            </div>
        </nav>
    }
}

export default Header
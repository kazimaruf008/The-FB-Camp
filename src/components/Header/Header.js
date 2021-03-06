import React from 'react';
import './Header.css'
import 'bootstrap/dist/js/bootstrap.min.js';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand logo" href="../Home/Home.js">The FB Camp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="../Home/Home.js">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Blog</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    </ul>
                </div>
            </nav>
            <div className="d-flex justify-content-center banner banner align-items-center text-center">
                <h1 className="banner-text">
                    Welcome 
                    <br/>
                    The FB Camp
                </h1>
            </div>
        </div>
    );
};

export default Header;

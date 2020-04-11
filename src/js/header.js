import React from "react";
import logo from '../Assets/LOGO.png'
import ReactDOM from 'react-dom';

export class MenuSection extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
                <nav
                    className="navbar fix-navbar white-back black-font  fixed-top navbar-expand-sm navbar-light bg-white">
                    <div className="container-fluid navbar-content">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="list-item">
                                <a href="home.html" className="logo-link"><img className="img-responsive logo" src={logo} alt="Loghmeh Logo"/></a></li>
                        </ul>
                    </div>
                </nav>
        );
    }

}
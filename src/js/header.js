import React from "react";
import logo from '../Assets/LOGO.png'
import ReactDOM from 'react-dom';
import {Home} from "./home";
import {SignIn} from "./signIn";
import {Link} from "react-router-dom";

export class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }
    logOut(){
        localStorage.clear();
        console.log(localStorage);
        ReactDOM.render(<SignIn />,document.getElementById("root"));
    }
    goToHome(){
        ReactDOM.render(<Home />,document.getElementById("root"));
    }
    render() {
        return (
            <nav className="navbar fix-navbar white-back black-font  fixed-top navbar-expand-sm navbar-light bg-white">
                {this.props.location==="entry" &&
                <div className="container-fluid navbar-content">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="list-item">
                            <a  className="logo-link"><img className="img-responsive logo" src={logo} alt="Loghmeh Logo"/></a></li>
                    </ul>
                </div>
                }
                {this.props.location==="userInfo" &&
                <div className="container-fluid navbar-content" lang="fa">
                    <ul className="nav navbar-nav navbar-right" lang="fa">
                        <li className="list-item" lang="fa">
                            <Link to={"/home"}>
                            <button type="button" className="without-style" >
                                <img className="img-responsive logo" src={logo} alt="Loghmeh Logo" onClick={this.goToHome}/>
                            </button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav" lang="fa">
                        <li className="list-item " dir="rtl"><Link to={"/login"} ><button type="button" className="exit without-style" onClick={this.logOut} lang="fa">????????</button></Link>
                        </li>
                        <li className="list-item" dir="rtl" lang="fa">
                            <a href="#" lang="fa">
                                <i className="flaticon-smart-cart " lang="fa"/>
                                <span className="white-font dot" lang="fa">??</span>
                            </a>
                        </li>
                    </ul>
                </div>
                }
                {this.props.location==="home" &&
                <div className="container-fluid navbar-content" lang="fa">
                    <ul className="nav navbar-nav" lang="fa">
                        <li className="list-item " dir="rtl"><Link to={"/login"}><button type="button" className="exit without-style" onClick={this.logOut} lang="fa">????????</button></Link>
                        </li>
                        <li className="list-item " dir="rtl"><a className="account" href="#" lang="fa">???????? ????????????</a></li>
                        <li className="list-item" dir="rtl">
                            <a href="#">
                                <i className="flaticon-smart-cart "/>
                                <span className="white-font dot" lang="fa">??</span>
                            </a>
                        </li>
                    </ul>
                </div>
                }
                {this.props.location==="restaurant" &&
                <div className="container-fluid navbar-content" lang="fa">
                    <ul className="nav navbar-nav navbar-right" lang="fa">
                        <li className="list-item" lang="fa">
                            <Link to={"/home"}>
                            <button type="button" className="without-style" >
                                <img className="img-responsive logo" src={logo} alt="Loghmeh Logo" onClick={this.goToHome}/>
                            </button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav" lang="fa">
                        <li className="list-item " dir="rtl"><button type="button" className="exit without-style" onClick={this.logOut} lang="fa">????????</button>
                        </li>
                        <li className="list-item" dir="rtl" lang="fa">
                            <a href="#" lang="fa">
                                <i className="flaticon-smart-cart " lang="fa"/>
                                <span className="white-font dot" lang="fa">??</span>
                            </a>
                        </li>
                    </ul>
                </div>
                }
            </nav>
        );
    }
}

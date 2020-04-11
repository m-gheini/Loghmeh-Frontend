import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {SignUp} from "./signUp";
import {Credit} from "./credit";
import {Home} from "./home";

export class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.goToSignUp = this.goToSignUp.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    goToSignUp(){
        ReactDOM.render(<SignUp />,document.getElementById("info-box"));
    }
    signIn(){
        ReactDOM.render(<Credit /> ,document.getElementById("root"));
    }
    render() {
        return (
            <div className='whole'>
                <Menu location="entry"/>
                <div className="container-fluid main-content " id="info-box" lang="fa">
                    <div className="col-sm-6 sighnup-div white-back" lang="fa">
                        <div className="form-div" dir="rtl" lang="fa">فرم ورود</div>
                            <form className="col-sm-10 signup-form" action="POST" dir="rtl" lang="fa" onSubmit={this.signIn}>
                                <div className="form-group" dir="rtl" lang="fa">
                                    <label htmlFor="email" dir="rtl" className="label dark-green" lang="fa">پست الکترونیک:</label>
                                    <input type="email" className="form-control gray-back" dir="rtl" id="email" placeholder="پست الکترونیک" required lang="fa"/>
                                </div>
                                <div className="form-group" dir="rtl" lang="fa">
                                    <label htmlFor="pwd" dir="rtl" className="label dark-green" lang="fa">رمز عبور:</label>
                                    <input type="password" className="form-control gray-back" id="pwd" dir="rtl" placeholder="رمز عبور" required lang="fa"/>
                                </div>
                                <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl" lang="fa" >ورود
                                </button>
                        </form >
                        <div className="no-account" dir="rtl" lang="fa">
                            کاربر جدید هستید؟
                            <button type="submit"  className="new-user" onClick={this.goToSignUp}>ثبت نام کنید.</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export class Menu extends React.Component{
    constructor(props) {
        super(props);
        // this.logOut = this.logOut.bind(this);
        // this.goToHome = this.goToHome.bind(this);
    }
    logOut(){
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
                                <button type="submit" className="without-style" >
                                    <img className="img-responsive logo" src={logo} alt="Loghmeh Logo" onClick={this.goToHome}/>
                                </button>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav" lang="fa">
                            <li className="list-item " dir="rtl"><button className="exit without-style" onClick={this.logOut} lang="fa">خروج</button>
                            </li>
                            <li className="list-item" dir="rtl" lang="fa">
                                <a href="#" lang="fa">
                                    <i className="flaticon-smart-cart " lang="fa"/>
                                    <span className="dot" lang="fa">۳</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                }
                {this.props.location==="home" &&
                <div className="container-fluid navbar-content" lang="fa">
                    <ul className="nav navbar-nav" lang="fa">
                        <li className="list-item " dir="rtl"><button className="exit without-style" onClick={this.logOut} lang="fa">خروج</button>
                        </li>
                        <li className="list-item " dir="rtl"><a className="account" href="#" lang="fa">حساب کاربری</a></li>
                        <li className="list-item" dir="rtl">
                            <a href="#">
                                <i className="flaticon-smart-cart "/>
                                <span className="dot" lang="fa">۳</span>
                            </a>
                        </li>
                    </ul>
                </div>
                }
                {this.props.location==="restaurant" &&
                <div className="container-fluid navbar-content" lang="fa">
                    <ul className="nav navbar-nav navbar-right" lang="fa">
                        <li className="list-item" lang="fa">
                            <button type="submit" className="without-style" >
                                <img className="img-responsive logo" src={logo} alt="Loghmeh Logo" onClick={this.goToHome}/>
                            </button>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav" lang="fa">
                        <li className="list-item " dir="rtl"><button className="exit without-style" onClick={this.logOut} lang="fa">خروج</button>
                        </li>
                        <li className="list-item" dir="rtl" lang="fa">
                            <a href="#" lang="fa">
                                <i className="flaticon-smart-cart " lang="fa"/>
                                <span className="dot" lang="fa">۳</span>
                            </a>
                        </li>
                    </ul>
                </div>
                }
            </nav>
        );
    }
}
export class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="footer" dir="rtl" lang="fa" >
                <p lang="fa">&copy; تمامی حقوق متعلق به لقمه است.</p>
            </footer>
        );
    }


}
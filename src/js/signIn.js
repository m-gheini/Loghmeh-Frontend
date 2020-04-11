import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {SignUp} from "./signUp";
import {Credit} from "./credit";

export class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.goToSignUp = this.goToSignUp.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    goToSignUp(){
        ReactDOM.render(<SignUp />,document.getElementById("root"));
    }
    signIn(){
        ReactDOM.render(<Credit /> ,document.getElementById("root"));
    }
    render() {
        return (
            <div className="whole">
                <nav
                    className="navbar fix-navbar white-back black-font  fixed-top navbar-expand-sm navbar-light bg-white">
                    <div className="container-fluid navbar-content">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="list-item">
                                <a href="#" className="logo-link"><img className="img-responsive logo" src={logo} alt="Loghmeh Logo"/></a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid main-content " lang="fa">
                    <div className="col-sm-6 sighnup-div white-back" lang="fa">
                        <div className="form-div" dir="rtl" lang="fa">فرم ورود</div>
                            <form className="col-sm-10 signup-form" action="POST" dir="rtl" lang="fa" >
                                <div className="form-group" dir="rtl" lang="fa">
                                    <label htmlFor="email" dir="rtl" className="label dark-green" lang="fa">پست الکترونیک:</label>
                                    <input type="email" className="form-control gray-back" dir="rtl" id="email" placeholder="پست الکترونیک" required lang="fa"/>
                                </div>
                                <div className="form-group" dir="rtl" lang="fa">
                                    <label htmlFor="pwd" dir="rtl" className="label dark-green" lang="fa">رمز عبور:</label>
                                    <input type="password" className="form-control gray-back" id="pwd" dir="rtl" placeholder="رمز عبور" required lang="fa"/>
                                </div>
                                <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl" lang="fa" onClick={this.signIn}>ورود
                                </button>
                        </form >
                        <div className="no-account" dir="rtl" lang="fa">
                            کاربر جدید هستید؟
                            <button type="submit"  className="new-user" onClick={this.goToSignUp}>ثبت نام کنید.</button>
                        </div>
                    </div>
                </div>
                <footer className="footer" dir="rtl" lang="fa" >
                    <p lang="fa">&copy; تمامی حقوق متعلق به لقمه است.</p>
                </footer>
            </div>
        );
    }
}
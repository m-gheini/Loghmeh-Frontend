import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {SignUp} from "./signUp";
import {Credit} from "./credit";
import {Home} from "./home";
import {Footer} from "./footer";
import {Menu} from "./header";

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
                <div className="container-fluid main-content "  lang="fa">
                    <div className="col-sm-6 sighnup-div white-back" lang="fa" id="info-box">
                        <div className="form-div" dir="rtl" lang="fa" id="form">فرم ورود</div>
                            <form className="col-sm-10 signup-form" action="" dir="rtl" lang="fa" onSubmit={this.signIn}>
                                <EntryInput htmlFor="email" label="پست الکترونیک:" inputType="email" placeHolder="پست الکترونیک"/>
                                <EntryInput htmlFor="pwd" label="رمز عبور:" inputType="password" placeHolder="رمز عبور"/>
                                <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl" lang="fa" >ورود</button>
                                <div className="no-account" dir="rtl" lang="fa">
                                    <br/>
                                    <br/>
                                    کاربر جدید هستید؟
                                    <button type="submit"  className="new-user" onClick={this.goToSignUp}>ثبت نام کنید.</button>
                                </div>
                            </form >
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export class EntryInput extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group" dir="rtl" lang="fa">
                <label htmlFor={this.props.htmlFor} dir="rtl" className="label dark-green" lang="fa">{this.props.label}</label>
                <input type={this.props.inputType} className="form-control gray-back" dir="rtl"  placeholder={this.props.placeHolder} required lang="fa"/>
            </div>
        );
    }

}

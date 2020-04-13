import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {EntryInput, SignIn} from "./signIn";
import {Menu} from "./header";
import {Footer} from "./footer";

export class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.goToSignIn = this.goToSignIn.bind(this);

    }
    goToSignIn(){
        ReactDOM.render(<SignIn />,document.getElementById("root"));
    }
    render(){
        return(
            <div className='whole'>
                <Menu location="entry"/>
                <div className="container-fluid main-content "  lang="fa">
                    <div className="col-sm-6 sighnup-div white-back" lang="fa" id="info-box">
                <div className="form-div" dir="rtl" lang="fa">فرم ثبت نام</div>
                <form className="col-sm-10 signup-form" action="" dir="rtl" lang="fa" onSubmit={this.goToSignIn}>
                    <br/>
                    <br/>
                    <EntryInput htmlFor="" label="نام و نام خانوادگی:" inputType="text" placeHolder="نام و نام خانوادگی"/>
                        <EntryInput htmlFor="email" label="پست الکترونیک:" inputType="email" placeHolder="پست الکترونیک"/>
                        <EntryInput htmlFor="phone" label="تلفن همراه:" inputType="tel"  placeHolder="تلفن همراه"/>
                        <EntryInput htmlFor="pwd" label="رمز عبور:" inputType="password" placeHolder="رمز عبور"/>
                    <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl" lang="fa">ثبت نام</button>
                    <div className="no-account" dir="rtl" lang="fa">
                        <br/>
                        <br/>
                        ثبت نام کرده اید؟
                        <button type="button"  className="new-user" onClick={this.goToSignIn}>وارد شوید.</button>
                    </div>
                </form>
                    </div>
                </div>
                <Footer/>

            </div>
    );
    }

}
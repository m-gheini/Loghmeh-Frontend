import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {EntryInput, SignIn} from "./signIn";

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
            <div >
                <div className="form-div" dir="rtl" lang="fa">فرم ثبت نام</div>
                <form className="col-sm-10 signup-form" action="" dir="rtl" lang="fa" onSubmit={this.goToSignIn}>
                        <EntryInput htmlFor="" label="نام و نام خانوادگی:" inputType="text" placeHolder="نام و نام خانوادگی"/>
                        <EntryInput htmlFor="email" label="پست الکترونیک:" inputType="email" placeHolder="پست الکترونیک"/>
                        <EntryInput htmlFor="phone" label="تلفن همراه:" inputType="tel"  placeHolder="تلفن همراه"/>
                        <EntryInput htmlFor="pwd" label="رمز عبور:" inputType="password" placeHolder="رمز عبور"/>
                    <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl" lang="fa">ثبت نام</button>
                </form>
            </div>
    );
    }

}
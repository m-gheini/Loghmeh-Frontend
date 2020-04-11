import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {SignIn} from "./signIn";

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
            <div className="whole">

                <div className="container-fluid main-content " lang="fa">
                    <div className="col-sm-6 sighnup-div white-back" lang="fa">
                        <div className="form-div" dir="rtl" lang="fa">فرم ثبت نام</div>
                        <form className="col-sm-10 signup-form" action="" dir="rtl" lang="fa" onSubmit={this.goToSignIn}>
                            <div className="form-group" dir="rtl" lang="fa">
                                <label dir="rtl" className="label dark-green" lang="fa">نام و نام خانوادگی:</label>
                                <input type="text" className="form-control gray-back" dir="rtl"
                                       placeholder="نام و نام خانوادگی" required lang="fa" />
                            </div>
                            <div className="form-group" dir="rtl" lang="fa">
                                <label htmlFor="email" dir="rtl" className="label dark-green" lang="fa">پست
                                    الکترونیک:</label>
                                <input type="email" className="form-control gray-back" dir="rtl" id="email"
                                       placeholder="پست الکترونیک" required lang="fa" />
                            </div>
                            <div className="form-group" dir="rtl" lang="fa">
                                <label dir="rtl" className="label dark-green" lang="fa">تلفن همراه:</label>
                                <input type="text" className="form-control gray-back" dir="rtl" placeholder="تلفن همراه"
                                       required lang="fa" />
                            </div>
                            <div className="form-group" dir="rtl" lang="fa">
                                <label htmlFor="pwd" dir="rtl" className="label dark-green" lang="fa">رمز عبور:</label>
                                <input type="password" className="form-control gray-back" id="pwd" dir="rtl"
                                       placeholder="رمز عبور" required lang="fa" />
                            </div>
                            <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl"
                                    lang="fa">ثبت نام
                            </button>
                        </form>

                    </div>
                </div>
            </div>
    );
    }

}
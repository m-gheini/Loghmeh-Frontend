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
        this.handleAddUser = this.handleAddUser.bind(this);
        this.state = {
            userName : null,
            familyName : null,
            email : null,
            phoneNumber : null,
            password : null,
            status : null,
            massage :null
        }

    }
    handleAddUser(event) {
        event.preventDefault();
        event.persist();
        var params = {
            "password" : event.target[4].value,
            "name" : event.target[0].value,
            "familyName" : event.target[1].value,
            "email" : event.target[2].value,
            "phoneNumber" : event.target[3].value
        };
        var queryString = Object.keys(params).map(function(key){
            return key + '=' + params[key]
        }).join('&');
        console.log(queryString);
        fetch('http://localhost:8080/users?'+queryString,{
            method: 'POST' ,
            headers: {
                'content-length' : queryString.length,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
            // body: queryString
        })
            .then(response => response.json())
            .then(data => {this.setState(prevState => ({status: data.errorCode,massage: data.errorMassage}))})
            .then(data=>{
                console.log(queryString);

                if(this.state.status !== 200 && this.state.status!==201 && this.state.status)
                    window.alert(this.state.massage);
                else {
                    window.alert(this.state.massage);
                    ReactDOM.render(<SignIn />,document.getElementById("root"));
                }
            });
    }

    goToSignIn(event){
        ReactDOM.render(<SignIn />,document.getElementById("root"));
    }
    render(){
        return(
            <div className='whole'>
                <Menu location="entry"/>
                <div className="container-fluid main-content "  lang="fa">
                    <div className="col-sm-6 sighnup-div white-back" lang="fa" id="info-box" >
                        <div className="form-div" dir="rtl" lang="fa">فرم ثبت نام</div>
                <form className="col-sm-10 signup-form" action="" dir="rtl" lang="fa" onSubmit={(e) => {this.handleAddUser(e)}}>
                    <br/>
                    <br/>
                    <EntryInput htmlFor="" label="نام:" inputType="text" placeHolder="نام"/>
                    <EntryInput htmlFor="" label="نام خانوادگی:" inputType="text" placeHolder=" نام خانوادگی"/>
                    <EntryInput htmlFor="email" label="پست الکترونیک:" inputType="email" placeHolder="پست الکترونیک"/>
                    <EntryInput htmlFor="phone" label="تلفن همراه:" inputType="tel"  placeHolder="تلفن همراه"/>
                    <EntryInput htmlFor="pwd" label="رمز عبور:" inputType="password" placeHolder="رمز عبور"/>
                    <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl" lang="fa">ثبت نام</button>
                    <div className="no-account" dir="rtl" lang="fa">
                        <br/>
                        <br/>
                        ثبت نام کرده اید؟
                        <button type="button"  className="new-user" onClick={(e) => {this.goToSignIn(e)}}>وارد شوید.</button>
                    </div>
                </form>
                    </div>
                </div>
                <Footer/>

            </div>
    );
    }

}
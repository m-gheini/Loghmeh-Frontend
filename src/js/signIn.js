import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {Loader} from "./loading";
import {SignUp} from "./signUp";
import {Credit} from "./credit";
import {Home} from "./home";
import {Footer} from "./footer";
import {Menu} from "./header";
import GoogleLogin from "react-google-login"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import {Restaurant} from "./restaurant";

export class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.goToSignUp = this.goToSignUp.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            redirect :false,
            redirectToReg : false
        }
    }
    goToSignUp(){
        ReactDOM.render(<SignUp/> ,document.getElementById("root"));
    }
    signIn(){
        ReactDOM.render(<Credit /> ,document.getElementById("root"));
    }
    handleEnterUser(event) {
        event.preventDefault();
        event.persist();
        var params = {
            "email" : event.target[0].value,
            "password" : event.target[1].value
        };
        var queryString = Object.keys(params).map(function(key){
            return key + '=' + params[key]
        }).join('&');
        fetch('http://185.166.105.6:30007/IECA/login?'+queryString,{
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
                if(this.state.status !== 200 && this.state.status) {
                    window.alert(this.state.massage);
                }
                else {
                    localStorage.setItem("jwt",this.state.massage);
                    console.log(localStorage);
                    //window.alert(this.state.massage);
                    this.state.redirect = true;
                    this.forceUpdate();
                }
            });
    }
    googleSignIn(response){
        console.log(response);
        // setEmail(response.profileObj.email);
        const queryString = "email="+response.profileObj.email;
        console.log(queryString);
        fetch('http://185.166.105.6:30007/IECA/googleLogin?'+queryString,{
            method: 'POST' ,
            headers: {
                'content-length' : queryString.length,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(data => {this.setState(prevState => ({status: data.errorCode,massage: data.errorMassage}))})
            .then(data=>{
                console.log(queryString);
                console.log("HEREEE")
                console.log(this.state.message);
                if(this.state.status !== 200 && this.state.status) {

                    window.alert(this.state.massage);
                    this.setState(prevState => ({redirectToReg: true}));
                    ReactDOM.render(
                        <Router>
                            <Switch >
                        {/*<Redirect to="/restaurantInfo"/>*/}
                                <SignIn/>
                            </Switch>
                        </Router>
                        ,document.getElementById("root"));
                    //this.forceUpdate();
                }
                else {
                    localStorage.setItem("jwt",this.state.massage);
                    console.log(localStorage);
                    this.setState(prevState => ({redirect: true}));
                    ReactDOM.render(
                        <Router>
                            <Switch >
                                {/*<Redirect to="/restaurantInfo"/>*/}
                                <SignIn/>
                            </Switch>
                        </Router>
                        ,document.getElementById("root"));
                    //this.forceUpdate();
                }
            });
    }
    render() {
        console.log("from login...")
        console.log("redirect",this.state.redirect);
        if(this.state.redirect){
            console.log("redirect finally ",this.state.redirect);
            return <Redirect to={"/userCredit"}/>
        }
        if(this.state.redirectToReg){
            console.log("redirect finally ",this.state.redirect);
            return <Redirect to={"/register"}/>
        }
        if(localStorage.getItem("jwt") === null) {
            return (

                <Router>
                    <Switch>
                        <Route path="/userCredit"><Credit/></Route>
                        <Route path="/register"><SignUp/></Route>
                        <Route exact path="/login">
                            <div className='whole'>
                                <Menu location="entry"/>
                                <div className="container-fluid main-content " lang="fa">
                                    <div className="col-sm-6 sighnup-div white-back" lang="fa" id="info-box">
                                        <div className="form-div" dir="rtl" lang="fa" id="form">?????? ????????</div>
                                        <form className="col-sm-10 signup-form" action="" dir="rtl" lang="fa"
                                              onSubmit={(e) => {
                                                  this.handleEnterUser(e)
                                              }}>
                                            <EntryInput htmlFor="email" label="?????? ??????????????????:" inputType="email"
                                                        placeHolder="?????? ??????????????????"/>
                                            <EntryInput htmlFor="pwd" label="?????? ????????:" inputType="password"
                                                        placeHolder="?????? ????????"/>
                                            <button type="submit"
                                                    className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl"
                                                    lang="fa">????????
                                            </button>
                                            <GoogleLogin
                                                className="google-signin"
                                                clientId="1033049469249-3efdhkrfvbepo8h0ma107og9eqgkd163.apps.googleusercontent.com"
                                                buttonText="???????? ???? ?????????? ???????? ???????????? ????????  "
                                                onSuccess = {(e)=>{this.googleSignIn(e)}}
                                                onFailure = {(e)=>{this.googleSignIn(e)}}

                                            />
                                            <div className="no-account" dir="rtl" lang="fa">
                                                <br/>
                                                <br/>
                                                ?????????? ???????? ????????????
                                                <Link to={'/register'} className="new-user">?????? ?????? ????????.</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <Footer/>
                                {/*<Loader/>*/}
                            </div>

                        </Route>
                    </Switch>
                </Router>
            );
        }
        else{
            return <Redirect to={"/home"}/>
        }
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
                {this.props.inputType==="tel" &&
                <input type={this.props.inputType} className="form-control gray-back" dir="rtl"  pattern="09[0-9]{9}" placeholder={this.props.placeHolder} required lang="fa"/>
                }
                {this.props.inputType!=="tel" &&
                <input type={this.props.inputType} className="form-control gray-back" dir="rtl"  placeholder={this.props.placeHolder} required lang="fa"/>
                }
            </div>
        );
    }
}

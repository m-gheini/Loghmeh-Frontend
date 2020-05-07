import React from "react";
import ReactDOM from 'react-dom';
import {Orders} from "./orders";
import {Footer} from "./footer";
import {Menu} from "./header";
import {Loader} from "./loading";
import {SignIn} from "./signIn";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Home} from "./home";

export class Credit extends React.Component{
    constructor(props) {
        super(props);
        this.handleIncreasing = this.handleIncreasing.bind(this);
        this.handleCreditInc = this.handleCreditInc.bind(this);
        this.state = {incCredit : 0,
            status : null,
            massage :null
        }
    }
    goToCredit(){
        //event.preventDefault();
        ReactDOM.render(<Credit />,document.getElementById("root"));
    }

    handleIncreasing(event) {
        console.log(localStorage);

        event.preventDefault();
        var params = {
            "credit" : this.state.incCredit
        };
        var queryString = Object.keys(params).map(function(key){
            return key + '=' + params[key]
        }).join('&');
        console.log(localStorage)
        fetch('http://localhost:8080/user?'+queryString,{
            method: 'PUT' ,
            headers: {
                'Authorization': localStorage.getItem("jwt"),
                'content-length' : queryString.length,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: queryString
        })
            .then(response => response.json())
            .then(data => {this.setState(prevState => ({status: data.errorCode,massage: data.errorMassage}))})
            .then(data=>{
                if(this.state.status !== 200 && this.state.status!==201 && this.state.status) {
                    window.alert(this.state.massage);
                    if(this.state.status===300){
                        ReactDOM.render(<SignIn />,document.getElementById("root"));
                    }
                }
            });

    }


    handleCreditInc(event){
        event.persist();
        this.setState(prevState => ({incCredit : event.target.value}))
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={"/login"}><SignIn/></Route>
                    <Route exact path={"/home"}><Home/></Route>
                    <Route exact path={"/userOrders"}><Orders/></Route>
                    <Route exact path={"/userCredit"}>
                        <div className="whole">
                            <Menu location="userInfo"/>
                            <UserInfo />
                            <div className="container-fluid credit-content" lang="fa">
                                <div className="container-fluid col-sm-10 box white-back" lang="fa">
                                    <Choices location="credit"/>
                                    <div className="inner" lang="fa">
                                        <form className="form-inline" dir="rtl" lang="fa">
                                <span className="form-input" dir="rtl" lang="fa">
                                    <input type="number" className="form-control gray-back down credit-input"
                                           placeholder="میزان افزایش اعتبار" size="30" dir="rtl" lang="fa" required
                                           onChange={this.handleCreditInc}/>
                                </span>
                                            <span className="form-btn" dir="rtl" lang="fa">
                                                <Link to={"/userCredit"}>
                                    <button type="submit" className="btn submit-btn down" dir="rtl"
                                            onClick={(e) => {this.handleIncreasing(e)}} lang="fa" >افزایش
                                    </button>
                                                    </Link>
                                </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <Footer/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }

}
export class UserInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading : false,
            name : '',
            familyName : '',
            email : '',
            credit : 0,
            phoneNumber : 0}
    }
    render() {
        return (
            <div className="container-fluid user-info pink-back" dir="rtl" lang="fa">
                { this.state.loading ? <Loader/> :
                    <div>
                <div className="col-sm-6 important" dir="rtl" lang="fa"><span className="white-font flaticon-account " lang="fa"/>
                    {this.state.name} {this.state.familyName}
                </div>
                <div className="col-sm-6 info" dir="rtl" lang="fa">
                    <ul lang="fa">
                        <li lang="fa"><i className="flaticon-phone" dir="rtl"/>
                            {/*۰۹۱۲۳۴۵۶۷۸۹*/}
                            {this.state.phoneNumber}
                        </li>
                        <li lang="fa"><i className="flaticon-mail" dir="rtl"/>
                            {/*ekhamespanah@yahoo.com*/}
                            {this.state.email}
                        </li>
                        <li lang="fa"><i className="flaticon-card" dir="rtl"/>
                            {/*۱۰۰۰۰۰ تومان*/}
                            {this.state.credit} تومان
                        </li>
                    </ul>
                </div>
                    </div>
                    }
            </div>
        );
    }


    componentDidMount() {
        this.setState(prevState => ({loading : true}));
        fetch('http://localhost:8080/user',{
            method: 'GET' ,
            headers: {
                'Authorization': localStorage.getItem("jwt")
            }
        })
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        phoneNumber : data.phoneNumber,
                        name : data.name,
                        familyName : data.familyName,
                        email : data.email,
                        credit : data.credit,
                        loading: false})));
    }
}
export class Choices extends React.Component{
    constructor(props) {
        super(props);
        this.goToCredit = this.goToCredit.bind(this);
        this.goToOrders = this.goToOrders.bind(this);
    }
    goToOrders(){
        ReactDOM.render(<Orders />,document.getElementById("root"));
    }
    goToCredit(){
        ReactDOM.render(<Credit />,document.getElementById("root"));
    }

    render() {
        return (
            <div>
                {this.props.location==="credit" &&
                <span className="container btn-group col-sm-8 choices white-back" dir="rtl" lang="fa">
                    <Link to={"/userCredit"}>
                        <button type="button" className="btn btn-primary orders pink-back white-font" dir="rtl" onClick={this.goToCredit} lang="fa">افزایش اعتبار</button>
                    </Link>
                    <Link to={"/userOrders"}>
                        <button type="button" className="btn btn-primary credit white-back black-font left-border" dir="rtl" onClick={this.goToOrders} lang="fa">سفارش ها</button>
                    </Link>
            </span>
                }
                {this.props.location === "orders" &&
                <span className="container btn-group col-sm-8 choices pink-back" dir="rtl" lang="fa">
                    <Link to={"/userCredit"}>
                        <button type="button" className="btn btn-primary orders black-font white-back" dir="rtl" onClick={this.goToCredit} lang="fa">افزایش اعتبار</button>
                    </Link>
                    <Link to={"/userOrders"}>
                        <button type="submit" className="btn btn-primary credit white-font pink-back left-border" dir="rtl" onSubmit={this.render} lang="fa">سفارش ها</button>
                    </Link>
                </span>
                }
            </div>
        );
    }


}
import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {Orders} from "./orders";
import {Home} from "./home";
import {SignIn} from "./signIn";
import {Footer} from "./footer";
import {Menu} from "./header";

export class Credit extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="whole">
                <Menu location="userInfo"/>
                <UserInfo/>
                <div className="container-fluid credit-content" lang="fa">
                    <div className="container-fluid col-sm-10 box white-back" lang="fa">
                        <Choices location="credit"/>
                        <div className="inner" lang="fa">
                            <form className="form-inline" dir="rtl" lang="fa">
                                <span className="form-input" dir="rtl" lang="fa">
                                    <input type="text" className="form-control gray-back down" placeholder="میزان افزایش اعتبار" size="30" dir="rtl" lang="fa"/>
                                </span>
                                <span className="form-btn" dir="rtl" lang="fa">
                                    <button type="submit" className="btn submit-btn down" dir="rtl" lang="fa">افزایش</button>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}
export class UserInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : null,
            familyName : null,
            email : null,
            credit : null,
            phoneNumber : null}
    }
    render() {
        return (
            <div className="container-fluid user-info pink-back" dir="rtl" lang="fa">
                <div className="col-sm-6 important" dir="rtl" lang="fa"><span className="flaticon-account " lang="fa"/>
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
                            {this.state.credit}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }


    componentDidMount() {
        fetch('http://localhost:8080/users/1')
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        phoneNumber : data.phoneNumber,
                        name : data.name,
                        familyName : data.familyName,
                        email : data.email,
                        credit : data.credit})));
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
                    <button type="button" className="btn btn-primary orders pink-back white-font" dir="rtl" onClick={this.goToCredit} lang="fa">افزایش اعتبار</button>
                    <button type="button" className="btn btn-primary credit white-back black-font left-border" dir="rtl" onClick={this.goToOrders} lang="fa">سفارش ها</button>
            </span>
            }
            {this.props.location === "orders" &&
            <span className="container btn-group col-sm-8 choices pink-back" dir="rtl" lang="fa">
                <button type="button" className="btn btn-primary orders black-font white-back" dir="rtl" onClick={this.goToCredit} lang="fa">افزایش اعتبار</button>
                <button type="button" className="btn btn-primary credit white-font pink-back left-border" dir="rtl" onClick={this.goToOrders} lang="fa">سفارش ها</button>
            </span>
            }
            </div>
        );
    }


}
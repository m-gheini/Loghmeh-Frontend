import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {Choices, Credit, UserInfo} from "./credit";
import {Home} from "./home";
import {SignIn} from "./signIn";
import {Footer} from "./footer";
import {Menu} from "./header";

export class Orders extends React.Component{
    constructor(props) {
        super(props);
        this.goToOrders = this.goToOrders.bind(this);
        this.goToCredit = this.goToCredit.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    goToOrders(){
        ReactDOM.render(<Orders />,document.getElementById("root"));
    }
    goToCredit(){
        ReactDOM.render(<Credit />,document.getElementById("root"))
    }
    goToHome(){
        ReactDOM.render(<Home />,document.getElementById("root"));
    }
    logOut(){
        ReactDOM.render(<SignIn/>,document.getElementById("root"));
    }
    render() {
        return (
            <div className="whole">
                <Menu location="userInfo"/>
                <UserInfo/>
                <div className="container-fluid new-content" lang="fa">
                    <div className="container-fluid col-sm-10 box white-back" lang="fa">
                        <Choices location="orders"/>
                        <br className="clear"/>
                        <form className="col-sm-12 new-inner" action="post" dir="rtl" lang="fa">
                            <Order status="onWay" index="۱" name={"رستوران خامس"}/>
                            <Order status="searching" index="۲" name={"رستوران خامس"}/>
                            <Order status="done" index="۳" name={"رستوران خامس"}/>
                            <Order status="done" index="۴" name={"رستوران خامس"}/>
                            <Order status="done" index="۵" name={"رستوران خامس"}/>
                            <Order status="done" index="۶" name={"رستوران خامس"}/>
                            <Order status="done" index="۷" name={"رستوران خامس"}/>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}
export class Order extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-9 row " lang="fa">
                <div className="restaurant-order black-font count-width" lang="fa">{this.props.index}</div>
                <div className="restaurant-name-width restaurant-order black-font" lang="fa">{this.props.name}</div>
                <div className="situation restaurant-order black-font" lang="fa">
                    <span className="form-btn" dir="rtl" lang="fa">
                        {this.props.status=="onWay" &&
                        <button type="button" className="btn on-way" dir="rtl" disabled lang="fa">پیک در مسیر</button>
                        }
                        {this.props.status==="done" &&
                        <button type="button" className="btn done black-font" dir="rtl" lang="fa">مشاهده فاکتور</button>
                        }
                        {this.props.status==="searching" &&
                        <button type="button" className="btn searching dark-green" dir="rtl" disabled lang="fa">در جست و جوی پیک</button>
                        }
                    </span>
                </div>
            </div>
        );
    }


}
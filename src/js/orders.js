import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {Choices, Credit, UserInfo} from "./credit";
import {Home} from "./home";
import {SignIn} from "./signIn";
import {Footer} from "./footer";
import {Menu} from "./header";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export class Orders extends React.Component{
    constructor(props) {
        super(props);
        this.goToOrders = this.goToOrders.bind(this);
        this.goToCredit = this.goToCredit.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.logOut = this.logOut.bind(this);
        this.fetchOrders = this.fetchOrders.bind(this);
        this.state = {
            orders : []
        }
    }
    fetchOrders(){
        fetch('http://localhost:8080/user/orders',{
            method: 'GET' ,
            headers: {
                'Authorization': localStorage.getItem("jwt")
            }
        })
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                                orders : data
                            })));
    }

    // fetch('http://localhost:8080/user/orders')
    //         .then(resp => resp.json())
    //         .then(data =>
    //             this.setState(
    //                 prevState => ({
    //                     orders : data
    //                 })));
    // }

    componentDidMount() {
        this.fetchOrders();
        this.timerId = setInterval(
            () => {this.fetchOrders()}
            , 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
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
            <Router>
                <Switch>
                    <Route exact path={"/login"}><SignIn/></Route>
                    <Route exact path={"/home"}><Home/></Route>
                    <Route exact path={"/userCredit"}><Credit/></Route>
                    <Route exact path={"/userOrder"}>
                        <div className="whole">
                            <Menu location="userInfo"/>
                            <UserInfo/>
                            <div className="container-fluid new-content" lang="fa">
                                <div className="container-fluid col-sm-10 box white-back" lang="fa" >
                                    <Choices location="orders"/>
                                    <br className="clear"/>
                                    <AllOrders orders={this.state.orders}/>
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
export class AllOrders extends React.Component{
    render() {
        return (
            <form className="col-sm-12 new-inner"  dir="rtl" lang="fa" >
                {this.props.orders.map(function (orders,i) {
                        return <Order status={orders.status} index={orders.index} name={orders.restaurantName} />
                    }
                )}
            </form>
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
                        {this.props.status==="delivering" &&
                        <button type="button" className="btn on-way" dir="rtl" disabled lang="fa">پیک در مسیر</button>
                        }
                        {this.props.status==="done" &&
                        <button type="button" className="btn done black-font" dir="rtl" lang="fa">مشاهده فاکتور</button>
                        }
                        {this.props.status==="finding delivery" &&
                        <button type="button" className="btn searching dark-green" dir="rtl" disabled lang="fa">در جست و جوی پیک</button>
                        }
                    </span>
                </div>
            </div>
        );
    }


}
import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import pizza from '../Assets/pizza.png';
import star from '../Assets/star.png';
import kfc from '../Assets/KFC.png';
import { SignIn} from "./signIn";
import {Restaurant} from "./restaurant";
import {Footer} from "./footer";
import {Menu} from "./header";
import {AllOrders, Orders} from "./orders";
import {Loader} from "./loading";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import {SignUp} from "./signUp";
import {Credit} from "./credit";

export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.fetchSaleRestaurants = this.fetchSaleRestaurants.bind(this);
        this.fetchRestaurants = this.fetchRestaurants.bind(this);
        this.setTime = this.setTime.bind(this);
        this.state = {
            loading : true,
            remainingTime : 1800000,
            restaurants : [],
            saleFoods : [],
            redirect : false,
            jwtRedirect : false,
            requestFailed :false
        }
    }
    fetchRestaurants(){
        fetch('http://185.166.105.6:30007/IECA/restaurants')
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        restaurants : data,
                        loading : false
                    })))
            .catch((error) => {
                console.log('error: ' + error);
                this.setState({ requestFailed: true });
                window.alert("you do not have access to this page please login first");
                this.forceUpdate();
            });
    }
    setTime(){
        fetch('http://185.166.105.6:30007/IECA/foodPartyTime')
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        remainingTime : data.remainingTime
                    })))
            .catch((error) => {
                console.log('error: ' + error);
                this.setState({ requestFailed: true });
                window.alert("you do not have access to this page please login first");
                this.forceUpdate();
            });
    }
    fetchSaleRestaurants(){
        fetch('http://185.166.105.6:30007/IECA/saleFoods')
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        saleFoods : data
                    })))
            .catch((error) => {
                console.log('error: ' + error);
                this.setState({ requestFailed: true });
                window.alert("you do not have access to this page please login first");
                this.forceUpdate();
            });

    }

    componentDidMount() {
        this.setState(prevState => ({loading : true}));
        this.fetchRestaurants();
        this.fetchSaleRestaurants();
        this.timerId = setInterval(
            () => {this.fetchSaleRestaurants(); this.forceUpdate(); console.log("AFTERforce");}
            , 1800000
        );
        this.timer = setInterval(
            () => {this.setTime()}
            ,1000
        )

    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    logOut(){
        ReactDOM.render(<SignIn/>,document.getElementById("root"));
    }
    goToSpecificRestaurant(){
        //ReactDOM.render(<Restaurant/>,document.getElementById("root"));
        this.setState(prevState => ({redirect: true}));
        ReactDOM.render(<Home/>,document.getElementById("root"));
    }
    render() {
        if(this.state.redirect){
            console.log("redirect finally ",this.state.redirect);
            return <Redirect to={"/restaurantInfo"}/>
        }
        if(this.state.requestFailed){
            return <Redirect to={"/login"}/>
        }
        else{
        return (
            <Router>
                <Switch>
                    <Route exact path={"/login"}><SignIn/></Route>
                    <Route exact path={"/home"}>
                        <div className="whole">
                            { this.state.loading ? <Loader/> :
                                <div className="whole">
                                    <Menu location="home"/>
                                    <div className = "overlay" dir = "rtl" lang = "fa" >
                                        <ul className = "nav top restaurant-logo-top" lang = "fa" >
                                            <li className = "list-item" > <img className = "img-responsive homelogo" src = {logo} alt = "Loghmeh Logo" lang = "fa" /> </li>
                                            <li className="current-restaurant-name white-font" lang="fa">?????????? ?? ???????? ???????? ???? ???????? ?????????? ???????????? ?????? ???? ?????????????? ??????????</li>
                                            <div className = "white-back search" lang = "fa" >
                                                <div className = "inner" lang = "fa" >
                                                    <form className = "form-inline" dir = "rtl" lang = "fa" >
                                        <span className = "form-input" dir = "rtl" lang = "fa" >
                                            <input type = "text" className = "sol-sm-4 form-control search-place gray-back" placeholder = "?????? ??????" dir = "rtl" lang = "fa" />
                                                <input type = "text" className = " sol-sm-4 form-control search-place gray-back" placeholder = "?????? ??????????????" dir = "rtl" lang = "fa" />
                                        </span>
                                                        <span className="form-btn" dir="rtl" lang="fa">
                                            <button type="submit" className=" sol-sm-4 btn search-btn submit-btn search-place black-font" dir="rtl" lang="fa">?????? ?? ????</button>
                                        </span>
                                                    </form>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="container-fluid content" lang="fa" dir="rtl">
                                        <div className="party-header contain-menu">
                                            <p className="menu-header dark-green" lang="fa">?????? ??????!</p>
                                        </div>
                                        <div className="white-back timer" lang="fa">
                                            <div  className="inner" lang="fa">
                                                <p className="dark-green text" lang="fa">???????? ???????? ??????????:{Math.floor((this.state.remainingTime) / 60000)}:{((this.state.remainingTime) % 60000)/1000}</p>
                                            </div>
                                        </div>
                                        <AllSaleFoods saleFoods={this.state.saleFoods}/>
                                        <div className="contain-menu">
                                            <p className="menu-header dark-green" lang="fa">?????????????? ????</p>
                                        </div>
                                        <AllRestaurants restaurants={this.state.restaurants}/>
                                    </div>

                                    <Footer/>
                                </div>
                            }
                        </div>
                    </Route>
                </Switch>
            </Router>
        );}
    }

}
export class AllSaleFoods extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="party-info">
                {this.props.saleFoods.map(function (saleFoods,i) {
                    return  <SaleFood name={saleFoods.name} score={saleFoods.popularity} preprice={saleFoods.oldPrice} price={saleFoods.price} count={saleFoods.count} restaurantName={saleFoods.restaurantName} image={saleFoods.image}/>

                })}
            </div>
        );
    }

}
export class AllRestaurants extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="restaurants">
            {this.props.restaurants.map(function (restaurants,i) {
                    return <RestaurantInfo name={restaurants.name} image={restaurants.logo} restaurant={restaurants}/>
                    }
                )}
            </div>
        );
    }

}

export class SaleFood extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="food-party-info white-back">
                <div>
                <img className="food-img party" src={this.props.image} alt="pizza"/>
                </div>
                <br/>
                <div className="restaurant-food-name name-party black-font" lang="fa">{this.props.name}</div>
                <span className="food-num rate black-font" dir="rtl" lang="fa">{this.props.score}<img  className="star-info" src={star} alt="star"/></span>
                <br/>
                <span dir="rtl" className="price pre"  lang="fa">{this.props.preprice}</span><br/>
                <span dir="rtl" className="price black-font post"  lang="fa">{this.props.price}</span><br/>
                <button type="button" className="btn done exist without-shadow black-font" dir="rtl" lang="fa" disabled>????????????: {this.props.count}</button>
                {this.props.count===0 &&
                <button type="button" className="btn done finished buy without-shadow white-font" dir="rtl" lang="fa"  disabled> ????????</button>
                }
                {this.props.status!==0 &&
                <button type="button" className="btn done buy without-shadow white-font" dir="rtl" lang="fa"> ????????</button>
                }
                <hr className="line"/>
                <p className="res-name" lang="fa">{this.props.restaurantName}</p>
            </div>
        );
    }

}
export class RestaurantInfo extends React.Component {
    constructor(props) {
        super(props);
        this.goToSpecificRestaurant = this.goToSpecificRestaurant.bind(this);

    }
    goToSpecificRestaurant(){
        console.log("SPECIFIC RESTAURANT!!!");
        // ReactDOM.render(<Restaurant restaurant={this.props.restaurant}/>,document.getElementById("root"));
        ReactDOM.render(
        <Router>
            <Switch >
                {/*<Redirect to="/restaurantInfo"/>*/}
                <Restaurant restaurant={this.props.restaurant}/>
            </Switch>
        </Router>,
        document.getElementById('root')
        );
       console.log("AFTER!!");
    }

    render() {
        return (
            <div className="foods res white-back">
                <img className="food-img party" src={this.props.image} alt="pizza"/>
                <br/>
                <span dir="rtl" className="center">
                    <span className="restaurant-food-name black-font">{this.props.name}</span>
                </span>
                <br/>
                <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa" onClick={this.goToSpecificRestaurant}>?????????? ??????</button>
            </div>
        );
    }


}
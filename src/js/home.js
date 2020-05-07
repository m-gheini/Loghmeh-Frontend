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
import {AllOrders} from "./orders";
import {Loader} from "./loading";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

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
            saleFoods : []
        }
    }
    fetchRestaurants(){
        fetch('http://localhost:8080/restaurants')
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        restaurants : data,
                        loading : false
                    })));
    }
    setTime(){
        fetch('http://localhost:8080/foodPartyTime')
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        remainingTime : data.remainingTime
                    })));
    }
    fetchSaleRestaurants(){
        fetch('http://localhost:8080/saleFoods')
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        saleFoods : data
                    })));
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
        ReactDOM.render(<Restaurant/>,document.getElementById("root"));

    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={"/login"}><SignIn/></Route>
                    <Route exact path={"/restaurantInfo"}><SignIn/></Route>
                    <Route exact path={"/home"}>
                        <div className="whole">
                            { this.state.loading ? <Loader/> :
                                <div className="whole">
                                    <Menu location="home"/>
                                    <div className = "overlay" dir = "rtl" lang = "fa" >
                                        <ul className = "nav top restaurant-logo-top" lang = "fa" >
                                            <li className = "list-item" > <img className = "img-responsive homelogo" src = {logo} alt = "Loghmeh Logo" lang = "fa" /> </li>
                                            <li className="current-restaurant-name white-font" lang="fa">اولین و بزرگ ترین وب سایت سفارش آنلاین غذا در دانشگاه تهران</li>
                                            <div className = "white-back search" lang = "fa" >
                                                <div className = "inner" lang = "fa" >
                                                    <form className = "form-inline" dir = "rtl" lang = "fa" >
                                        <span className = "form-input" dir = "rtl" lang = "fa" >
                                            <input type = "text" className = "sol-sm-4 form-control search-place gray-back" placeholder = "نام غذا" dir = "rtl" lang = "fa" />
                                                <input type = "text" className = " sol-sm-4 form-control search-place gray-back" placeholder = "نام رستوران" dir = "rtl" lang = "fa" />
                                        </span>
                                                        <span className="form-btn" dir="rtl" lang="fa">
                                            <button type="submit" className=" sol-sm-4 btn search-btn submit-btn search-place black-font" dir="rtl" lang="fa">جست و جو</button>
                                        </span>
                                                    </form>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="container-fluid content" lang="fa" dir="rtl">
                                        <div className="party-header contain-menu">
                                            <p className="menu-header dark-green" lang="fa">جشن غذا!</p>
                                        </div>
                                        <div className="white-back timer" lang="fa">
                                            <div  className="inner" lang="fa">
                                                <p className="dark-green text" lang="fa">زمان باقی مانده:{Math.floor((this.state.remainingTime) / 60000)}:{((this.state.remainingTime) % 60000)/1000}</p>
                                            </div>
                                        </div>
                                        <AllSaleFoods saleFoods={this.state.saleFoods}/>
                                        <div className="contain-menu">
                                            <p className="menu-header dark-green" lang="fa">رستوران ها</p>
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
        );
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
                <button type="button" className="btn done exist without-shadow black-font" dir="rtl" lang="fa" disabled>موجودی: {this.props.count}</button>
                {this.props.count===0 &&
                <button type="button" className="btn done finished buy without-shadow white-font" dir="rtl" lang="fa"  disabled> خرید</button>
                }
                {this.props.status!==0 &&
                <button type="button" className="btn done buy without-shadow white-font" dir="rtl" lang="fa"> خرید</button>
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
        ReactDOM.render(<Restaurant restaurant={this.props.restaurant}/>,document.getElementById("root"));

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
                <Link to={"/restaurantInfo"}>
                <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa" onClick={this.goToSpecificRestaurant}>نمایش منو</button>
                </Link>
            </div>
        );
    }


}
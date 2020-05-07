import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import restaurantLogo from '../Assets/RestaurantLogo.png';
import pizza from '../Assets/pizza.png';
import star from '../Assets/star.png';
import kfc from '../Assets/KFC.png';
import {Order, Orders} from "./orders";
import {AllRestaurants, Home, RestaurantInfo} from "./home";
import {SignIn} from "./signIn";
import {Footer} from "./footer";
import {Menu} from "./header";
import {Loader} from "./loading";

export class Restaurant extends React.Component{
    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
        this.logOut = this.logOut.bind(this);
        this.fetchFoods = this.fetchFoods.bind(this);
        this.fetchCart = this.fetchCart.bind(this);
        this.state = {
            loading : true,
            foods : [],
            foodsInCart : [],
            foodsInCartCount : [],
            saleFoodsInCart : [],
            saleFoodsInCartCount : []

        }

    }

    fetchFoods(){
        fetch('http://localhost:8080/restaurants/'+this.props.restaurant.id)
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        foods : data.menu,
                        loading : false
                    })));
    }
    componentDidMount() {
        this.setState(prevState => ({loading : true}));
        console.log(this.state.loading)
        this.fetchFoods();
        this.fetchCart();
    }

    goToHome(){
        ReactDOM.render(<Home />,document.getElementById("root"));
    }
    logOut(){
        ReactDOM.render(<SignIn/>,document.getElementById("root"));
    }

    fetchCart() {
        fetch('http://localhost:8080/user/cart',{
            method: 'GET' ,
            headers: {
                'Authorization': localStorage.getItem("jwt")
            }
        })
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        foodsInCart : data.foods,
                        foodsInCartCount : data.numberOfFood,
                        saleFoodsInCart : data.saleFoods,
                        saleFoodsInCartCount : data.numberOfSaleFood

                    })));
        // fetch('http://localhost:8080/user/cart'),{
        //     method: 'GET' ,
        //     headers: {
        //         'Authorization': localStorage.getItem("jwt")
        //     }
        // })
        //     .then(resp => resp.json())
        //     .then(data =>
        //         this.setState(
        //             prevState => ({
        //                 foodsInCart : data.foods,
        //                 foodsInCartCount : data.numberOfFood,
        //                 saleFoodsInCart : data.saleFoods,
        //                 saleFoodsInCartCount : data.numberOfSaleFood
        //
        //             })));
    }

    render() {
        return (
            <div className="whole">
                { this.state.loading ? <Loader/> :
                    <div className="whole">
                <Menu location="restaurant"/>
                <div className="container-fluid top pink-back" dir="rtl" lang="fa">
                    <ul className="nav top restaurant-logo-top" lang="fa">
                        <li className="list-item">
                            <img className="img-responsive restaurant-logo" src={this.props.restaurant.logo} alt="Loghmeh Logo" lang="fa"/>
                        </li>
                        <li className="current-restaurant-name black-font" lang="fa">{this.props.restaurant.name}</li>
                    </ul>
                </div>
                <div className="container-fluid content" lang="fa">
                    <Cart foods={this.state.foodsInCart} foodCount={this.state.foodsInCartCount} saleFoods={this.state.saleFoodsInCart} saleFoodCount={this.state.saleFoodsInCartCount}/>
                    <div className="menu">
                        <div className="contain-menu">
                            <p className="menu-header dark-green" lang="fa">منوی غذا </p>
                        </div>
                        <AllFoods foods={this.state.foods}/>
                    </div>
                </div>
                <Footer/>
                    </div>
                }
            </div>
        );
    }
}
export class AllFoods extends React.Component{
    render() {
        return (
            <div className="foods-container">
                {this.props.foods.map(function (foods,i) {
                        return <Food name={foods.name} image={foods.image} score={foods.popularity} cost={foods.price} foodInfo={foods} status="available"/>
                    }
                )}
            </div>
        );
    }

}

export class Food extends React.Component {
    constructor(props) {
        super(props);
        this.addToCartHandler = this.addToCartHandler.bind(this);
        this.state={
            status : null,
            massage :null
        }
    }

    addToCartHandler(){
        var params = {
            "restaurantId": this.props.foodInfo.restaurantId,
            "foodName" : this.props.foodInfo.name,
        };
        var queryString = Object.keys(params).map(function(key) {
            return key + '=' + params[key]
        }).join('&');
        console.log(queryString);
        fetch('http://localhost:8080/users/1/cart?'+queryString,{
            method: 'PUT' ,
            headers: {
                'content-length' : queryString.length,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: queryString
        })
            .then(response => response.json())
            .then(data => {this.setState(prevState => ({status: data.errorCode,massage: data.errorMassage}))})
            .then(data=>{
                if(this.state.status !== 200)
                    window.alert(this.state.massage)
            })

    }
    render() {
        return (
            <div className="foods white-back">
                <img className="food-img" src={this.props.image} alt="pizza"/>
                <br/>
                <span dir="rtl" className="center">
                     <span className="restaurant-food-name black-font" lang="fa">{this.props.name}</span>
                     <span className="food-num black-font" dir="rtl" lang="fa">{this.props.score}<img className="star" src={star} alt="star"/></span>
                 </span>
                <br/>
                <span dir="rtl" className="price black-font" lang="fa">{this.props.cost}</span><br/>
                {this.props.status==="done" &&
                <button type="button" className="btn done without-shadow gray-back black-font" dir="rtl" disabled lang="fa">ناموجود</button>
                }
                {this.props.status==="available" &&
                <button type="button" className="btn done without-shadow black-font" dir="rtl" lang="fa" onClick={this.addToCartHandler}> افزودن به سبد خرید</button>
                }
            </div>
        );
    }
}
export class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.finalize = this.finalize.bind(this);

        this.state = {
            fullCost : 0,
            status : null,
            massage :null
        }

    }
    finalize(){
        fetch('http://localhost:8080/users/1/cart',{
            method: 'POST' ,
            headers: {
                'content-length' : 0,
                'Authorization': localStorage.getItem("jwt"),
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
        })
            .then(response => response.json())
            .then(data => {this.setState(prevState => ({status: data.errorCode,massage: data.errorMassage}))})
            .then(data=>{
                if(this.state.status !== 200 && this.state.status!==201 && this.state.status)
                    window.alert(this.state.massage)
            })

    }


    render() {
        return (
            <div className="container-fluid col-sm-10 cart-box white-back" lang="fa">
                {console.log(this.props.foods)}
                <div className="contain" lang="fa">
                    <p className="text black-font" lang="fa">سبد خرید</p>
                </div>
                <div className="current-order" lang="fa">
                    {this.props.foods===[] || this.props.foods.map(function (foods,i) {
                            return <FoodInCart name={foods.name} count="1" cost={foods.price} />
                        }
                    )}
                    {this.props.saleFoods===[] || this.props.saleFoods.map(function (saleFoods,i) {
                            return <FoodInCart name={saleFoods.name} count="1" cost={saleFoods.price} />
                        }
                    )}
                    {/*<FoodInCart name="پیتزا اعلا" count="۲" cost=" ۷۸۰۰۰ تومان "/>*/}
                    {/*<FoodInCart name="پیتزا نیمه اعلا" count="۱" cost=" ۲۹۰۰۰ تومان "/>*/}
                </div>
                <br/>
                <div className="total black-font" dir="rtl" lang="fa">جمع کل: ۱۰۷۰۰۰ تومان</div>
                <br/>
                <div>
                    <button type="submit" className="btn submit-btn accept-btn" dir="rtl"
                            lang="fa" onClick={this.finalize}>تایید نهایی
                    </button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch('http://localhost:8080/user/cart',{
            method: 'GET' ,
            headers: {
                'Authorization': localStorage.getItem("jwt")
            }
        })
            .then(resp => resp.json())
            .then(data =>
                this.setState(
                    prevState => ({
                        foods : data.foods
                    })));

        // fetch('http://localhost:8080/users/1/cart')
        //     .then(resp => resp.json())
        //     .then(data =>
        //         this.setState(
        //             prevState => ({
        //                 foods : data.foods
        //             })));
    }
}
export class FoodInCart extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="food-info" lang="fa">
                <div className="food-name black-font" lang="fa">{this.props.name}</div>
                <div className="price-info" dir="rtl" lang="fa">
                    <ul lang="fa">
                        <li dir="rtl" lang="fa" className="black-font">
                            <button className="without-style white-back"><i className="flaticon-plus dark-green" dir="rtl"/></button>
                            {this.props.count}
                            <button className="without-style white-back"><i className="flaticon-minus" dir="rtl"/></button>
                        </li>
                        <li lang="fa" dir="rtl" className="little-price black-font">{this.props.cost}</li>
                    </ul>
                </div>
            </div>
        );
    }

}
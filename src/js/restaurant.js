import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import restaurantLogo from '../Assets/RestaurantLogo.png';
import pizza from '../Assets/pizza.png';
import star from '../Assets/star.png';
import kfc from '../Assets/KFC.png';
import {Orders} from "./orders";
import {Home} from "./home";
import {SignIn} from "./signIn";
import {Footer} from "./footer";
import {Menu} from "./header";

 export class Restaurant extends React.Component{
     constructor(props) {
         super(props);
         this.goToHome = this.goToHome.bind(this);
         this.logOut = this.logOut.bind(this);
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
                 <Menu location="restaurant"/>
                 <div className="container-fluid top pink-back" dir="rtl" lang="fa">
                     <ul className="nav top restaurant-logo-top" lang="fa">
                         <li className="list-item">
                             <img className="img-responsive restaurant-logo" src={restaurantLogo} alt="Loghmeh Logo" lang="fa"/>
                         </li>
                         <li className="current-restaurant-name black-font" lang="fa">رستوران خامس</li>

                     </ul>
                 </div>
                 <div className="container-fluid content" lang="fa">
                     <div className="container-fluid col-sm-10 cart-box white-back" lang="fa">
                         <div className="contain" lang="fa">
                             <p className="text black-font" lang="fa">سبد خرید</p>
                         </div>
                         <div className="current-order" lang="fa">
                             <div className="food-info" lang="fa">
                                 <div className="food-name black-font" lang="fa">پیتزا اعلا</div>
                                 <div className="price-info" dir="rtl" lang="fa">
                                     <ul>
                                         <li dir="rtl" lang="fa" className="black-font">
                                             <button className="without-style white-back"><i className="flaticon-plus dark-green" dir="rtl"/></button>
                                             ۲
                                             <button className="without-style white-back"><i className="flaticon-minus" dir="rtl"/></button></li>
                                         <li dir="rtl" className="little-price black-font" lang="fa">۷۸۰۰۰ تومان</li>
                                     </ul>
                                 </div>
                             </div>
                             <div className="food-info" lang="fa">
                                 <div className="food-name black-font" lang="fa">پیتزا نیمه اعلا</div>
                                 <div className="price-info" dir="rtl" lang="fa">
                                     <ul lang="fa">
                                         <li dir="rtl" lang="fa" className="black-font">
                                             <button className="without-style white-back"><i className="flaticon-plus dark-green" dir="rtl"/></button>
                                             ۱
                                             <button className="without-style white-back"><i className="flaticon-minus" dir="rtl"/></button>
                                         </li>
                                         <li lang="fa" dir="rtl" className="little-price black-font">۲۹۰۰۰ تومان</li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         <br/>
                         <div className="total black-font" dir="rtl" lang="fa">جمع کل: ۱۰۷۰۰۰ تومان</div>
                         <br/>
                         <div>
                             <button type="submit" className="btn submit-btn accept-btn" dir="rtl"
                                     lang="fa">تایید نهایی
                             </button>
                         </div>
                     </div>

                     <div className="menu">
                         <div className="contain-menu">
                             <p className="menu-header dark-green" lang="fa">منوی غذا </p>
                         </div>
                         <div className="foods-container">
                             <Food name=" پیتزا اعلا" score="   ۵" cost="۳۹۰۰۰ تومان" status="available"/>
                             <Food name=" پیتزا نیمه اعلا" score="   ۴" cost="۲۹۰۰۰ تومان" status="done"/>
                             <Food name=" پیتزا اعلا" score="   ۵" cost="۳۹۰۰۰ تومان" status="available"/>
                             <Food name=" پیتزا اعلا" score="   ۵" cost="۳۹۰۰۰ تومان" status="available"/>
                             <Food name=" پیتزا اعلا" score="   ۵" cost="۳۹۰۰۰ تومان" status="available"/>
                             <Food name=" پیتزا اعلا" score="   ۵" cost="۳۹۰۰۰ تومان" status="available"/>
                             <Food name=" پیتزا اعلا" score="   ۵" cost="۳۹۰۰۰ تومان" status="available"/>
                             <Food name=" پیتزا اعلا" score="   ۵" cost="۳۹۰۰۰ تومان" status="available"/>
                         </div>
                     </div>
                 </div>
                 <Footer/>
             </div>
         );
     }
 }
 export class Food extends React.Component {
     constructor(props) {
         super(props);
     }

     render() {
         return (
             <div className="foods white-back">
                 <img className="food-img" src={pizza} alt="pizza"/>
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
                 <button type="button" className="btn done without-shadow black-font" dir="rtl" lang="fa"> افزودن به سبد خرید</button>
                 }
             </div>
         );
     }

 }
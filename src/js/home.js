import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import pizza from '../Assets/pizza.png';
import star from '../Assets/star.png';
import kfc from '../Assets/KFC.png';
export class Home extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="whole">
                <nav className="navbar fix-navbar  fixed-top white-back black-font navbar-expand-sm navbar-light bg-white" lang="fa">
                    <div className="container-fluid navbar-content" lang="fa">
                        <ul className="nav navbar-nav" lang="fa">
                            <li className="list-item " dir="rtl"><a className="exit" lang="fa" href="signIn.html">خروج</a></li>
                            <li className="list-item " dir="rtl"><a className="account" href="#" lang="fa">حساب کاربری</a></li>
                            <li className="list-item" dir="rtl">
                                <a href="#">
                                    <i className="flaticon-smart-cart "/>
                                    <span className="dot" lang="fa">۳</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                < div className = "overlay" dir = "rtl" lang = "fa" >
                    < ul className = "nav top restaurant-logo-top" lang = "fa" >
                        < li className = "list-item" > < img className = "img-responsive homelogo" src = {logo} alt = "Loghmeh Logo" lang = "fa" /> </li>
                            <li className="current-restaurant-name white-font" lang="fa">اولین و بزرگ ترین وب سایت سفارش آنلاین غذا در دانشگاه تهران</li>
                            < div className = "white-back search" lang = "fa" >
                                < div className = "inner" lang = "fa" >
                                    < form className = "form-inline" dir = "rtl" lang = "fa" >
                                        < span className = "form-input" dir = "rtl" lang = "fa" >
                                            < input type = "text" className = "form-control search-place gray-back" placeholder = "نام غذا" size = "30" dir = "rtl" lang = "fa" />
                                                < input type = "text" className = "form-control search-place gray-back" placeholder = "نام رستوران" size = "30" dir = "rtl" lang = "fa" />
                                        </span>
                                        <span className="form-btn" dir="rtl" lang="fa">
                                            <button type="submit" className="btn done submit-btn search-place black-font" dir="rtl" lang="fa">جست و جو</button>
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
                            <p className="dark-green text" lang="fa">زمان باقی مانده: ۲۱:۴۸</p>
                        </div>
                    </div>
                    <div className="party-info">
                        <div className="food-party-info white-back">
                            <img className="food-img party" src={pizza} alt="pizza"/>
                                <br/>
                                    <span className="restaurant-food-name name-party black-font" lang="fa"> پیتزا</span>
                                    <span className="food-num rate black-font" dir="rtl" lang="fa">۵  <img  className="star-info" src={star} alt="star"/></span>
                                    <br/>
                                        <span dir="rtl" className="price pre"  lang="fa">۳۹۰۰۰ </span><br/>
                                        <span dir="rtl" className="price black-font post"  lang="fa">۲۹۰۰۰ </span><br/>
                                        <button type="button" className="btn done exist without-shadow black-font" dir="rtl" lang="fa" disabled>موجودی: ۳</button>
                                        <button type="button" className="btn done buy without-shadow white-font" dir="rtl" lang="fa"> خرید</button>
                                        <hr className="line"/>
                                            <p className="res-name" lang="fa">رستوران خامس</p>
                        </div>
                        <div className="food-party-info white-back">
                            <img className="food-img party" src={pizza} alt="pizza"/>
                                <br/>
                                    <span className="restaurant-food-name name-party black-font" lang="fa"> پیتزا</span>
                                    <span className="food-num rate black-font" dir="rtl" lang="fa">۵  <img  className="star-info" src={star} alt="star"/></span>
                                    <br/>
                                        <span dir="rtl" className="price pre"  lang="fa">۳۹۰۰۰ </span><br/>
                                        <span dir="rtl" className="price black-font post"  lang="fa">۲۹۰۰۰ </span><br/>
                                        <button type="button" className="btn done exist without-shadow black-font" dir="rtl" lang="fa" disabled>موجودی: ۳</button>
                                        <button type="button" className="btn done buy without-shadow white-font" dir="rtl" lang="fa"> خرید</button>
                                        <hr className="line"/>
                                            <p className="res-name" lang="fa">رستوران خامس</p>
                        </div>
                        <div className="food-party-info white-back">
                            <img className="food-img party" src={pizza} alt="pizza"/>
                                <br/>
                                    <span className="restaurant-food-name name-party black-font" lang="fa"> پیتزا</span>
                                    <span className="food-num rate black-font" dir="rtl" lang="fa">۵  <img  className="star-info" src={star} alt="star"/></span>
                                    <br/>
                                        <span dir="rtl" className="price pre"  lang="fa">۳۹۰۰۰ </span><br/>
                                        <span dir="rtl" className="price black-font post"  lang="fa">۲۹۰۰۰ </span><br/>
                                        <button type="button" className="btn done exist without-shadow black-font" dir="rtl" lang="fa" disabled>موجودی: ۳</button>
                                        <button type="button" className="btn done buy without-shadow white-font" dir="rtl" lang="fa"> خرید</button>
                                        <hr className="line"/>
                                            <p className="res-name" lang="fa">رستوران خامس</p>
                        </div>
                        <div className="food-party-info white-back">
                            <img className="food-img party" src={pizza} alt="pizza"/>
                                <br/>
                                    <span className="restaurant-food-name name-party black-font special" lang="fa"> پیتزا اعلا</span>
                                    <span className="food-num rate black-font" dir="rtl" lang="fa">۵  <img  className="star-info" src={star} alt="star"/></span>
                                    <br/>
                                        <span dir="rtl" className="price pre"  lang="fa">۴۴۰۰۰ </span><br/>
                                        <span dir="rtl" className="price black-font post"  lang="fa">۳۹۰۰۰ </span><br/>
                                        <button type="button" className="btn done exist without-shadow black-font" dir="rtl" lang="fa" disabled>ناموجود</button>
                                        <button type="button" className="btn done buy without-shadow white-font" dir="rtl" lang="fa"  disabled> خرید</button>
                                        <hr className="line"/>
                                            <p className="res-name" lang="fa">رستوران خامس</p>
                        </div>
                        <div className="food-party-info white-back">
                            <img className="food-img party" src={pizza} alt="pizza"/>
                                <br/>
                                    <span className="restaurant-food-name name-party black-font" lang="fa"> پیتزا</span>
                                    <span className="food-num rate black-font" dir="rtl" lang="fa">۵  <img  className="star-info" src={star} alt="star"/></span>
                                    <br/>
                                        <span dir="rtl" className="price pre"  lang="fa">۳۹۰۰۰ </span><br/>
                                        <span dir="rtl" className="price black-font post"  lang="fa">۲۹۰۰۰ </span><br/>
                                        <button type="button" className="btn done exist without-shadow black-font" dir="rtl" lang="fa" disabled>موجودی: ۳</button>
                                        <button type="button" className="btn done buy without-shadow white-font" dir="rtl" lang="fa"> خرید</button>
                                        <hr className="line"/>
                                            <p className="res-name" lang="fa">رستوران خامس</p>
                        </div>
                        <div className="food-party-info white-back">
                            <img className="food-img party" src={pizza} alt="pizza"/>
                                <br/>
                                    <span className="restaurant-food-name name-party black-font" lang="fa"> پیتزا</span>
                                    <span className="food-num rate black-font" dir="rtl" lang="fa">۵  <img  className="star-info" src={star} alt="star"/></span>
                                    <br/>
                                        <span dir="rtl" className="price pre"  lang="fa">۳۹۰۰۰ </span><br/>
                                        <span dir="rtl" className="price black-font post"  lang="fa">۲۹۰۰۰ </span><br/>
                                        <button type="button" className="btn done exist without-shadow black-font" dir="rtl" lang="fa" disabled>موجودی: ۳</button>
                                        <button type="button" className="btn done buy without-shadow white-font" dir="rtl" lang="fa"> خرید</button>
                                        <hr className="line"/>
                                            <p className="res-name" lang="fa">رستوران خامس</p>
                        </div>
                    </div>
                    <div className="contain-menu">
                        <p className="menu-header dark-green" lang="fa">رستوران ها</p>
                    </div>
                    <div className="restaurants">
                        <div className="foods res white-back">
                            <img className="food-img party" src={kfc} alt="pizza"/>
                                <br/>
                                <span dir="rtl" className="center">
                                    <span className="restaurant-food-name black-font">Khames Fried Chicken</span>
                                </span>
                            <br/>
                            <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa">نمایش منو</button>
                        </div>
                        <div className="foods res white-back">
                            <img className="food-img party" src={kfc} alt="pizza"/>
                            <br/>
                            <span dir="rtl" className="center">
                                <span className="restaurant-food-name black-font">Khames Fried Chicken</span>
                            </span>
                            <br/>
                            <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa">نمایش منو</button>
                        </div>
                        <div className="foods res white-back">
                            <img className="food-img party" src={kfc} alt="pizza"/>
                                <br/>
                                <span dir="rtl" className="center">
                                    <span className="restaurant-food-name black-font">Khames Fried Chicken</span>
                                </span>
                                <br/>
                                <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa">نمایش منو</button>
                        </div>
                        <div className="foods res white-back">
                            <img className="food-img party" src={kfc} alt="pizza"/>
                            <br/>
                            <span dir="rtl" className="center">
                                <span className="restaurant-food-name black-font">Khames Fried Chicken</span>
                            </span>
                            <br/>
                            <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa">نمایش منو</button>
                        </div>
                        <div className="foods res white-back">
                            <img className="food-img party" src={kfc} alt="pizza"/>
                            <br/>
                            <span dir="rtl" className="center">
                                <span className="restaurant-food-name black-font">Khames Fried Chicken</span>
                            </span>
                            <br/>
                            <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa">نمایش منو</button>
                        </div>
                        <div className="foods res white-back">
                            <img className="food-img party" src={kfc} alt="pizza"/>
                            <br/>
                            <span dir="rtl" className="center">
                                <span className="restaurant-food-name black-font">Khames Fried Chicken</span>
                            </span>
                            <br/>
                            <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa">نمایش منو</button>
                        </div>
                        <div className="foods res white-back">
                            <img className="food-img party" src={kfc} alt="pizza"/>
                            <br/>
                            <span dir="rtl" className="center">
                                <span className="restaurant-food-name black-font">Khames Fried Chicken</span>
                            </span>
                            <br/>
                            <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa">نمایش منو</button>
                        </div>
                        <div className="foods res white-back">
                            <img className="food-img party" src={kfc} alt="pizza"/>
                            <br/>
                            <span dir="rtl" className="center">
                                <span className="restaurant-food-name black-font">Khames Fried Chicken</span>
                            </span>
                            <br/>
                            <button type="button" className="btn done black-font without-shadow" dir="rtl" lang="fa">نمایش منو</button>
                        </div>
                    </div>
                </div>

                <footer className="footer" dir="rtl"  lang="fa">
                    <p lang="fa">&copy; تمامی حقوق متعلق به لقمه است.</p>
                </footer>
            </div>
        );
    }

}
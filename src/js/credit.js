import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {Orders} from "./orders";
import {Home} from "./home";
import {SignIn} from "./signIn";

export class Credit extends React.Component{
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
        ReactDOM.render(<Credit />,document.getElementById("root"));
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
                <nav className="navbar fix-navbar white-back black-font fixed-top navbar-expand-sm navbar-light bg-white" lang="fa">
                    <div className="container-fluid navbar-content" lang="fa">
                        <ul className="nav navbar-nav navbar-right" lang="fa">
                            <li className="list-item" lang="fa">
                                <button type="submit" className="without-style" >
                                    <img className="img-responsive logo" src={logo} alt="Loghmeh Logo" onClick={this.goToHome}/>
                                </button>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav" lang="fa">
                            <li className="list-item " dir="rtl"><button className="exit without-style" onClick={this.logOut} lang="fa">خروج</button>
                            </li>
                            <li className="list-item" dir="rtl" lang="fa">
                                <a href="#" lang="fa">
                                    <i className="flaticon-smart-cart " lang="fa"/>
                                    <span className="dot" lang="fa">۳</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid user-info pink-back" dir="rtl" lang="fa">
                    <div className="col-sm-6 important" dir="rtl" lang="fa"><span className="flaticon-account " lang="fa"/>احسان
                        خامس پناه
                    </div>
                    <div className="col-sm-6 info" dir="rtl" lang="fa">
                        <ul lang="fa">
                            <li lang="fa"><i className="flaticon-phone" dir="rtl"/>
                                ۰۹۱۲۳۴۵۶۷۸۹
                            </li>
                            <li lang="fa"><i className="flaticon-mail" dir="rtl"/>
                                ekhamespanah@yahoo.com
                            </li>
                            <li lang="fa"><i className="flaticon-card" dir="rtl"/>
                                ۱۰۰۰۰۰ تومان
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid credit-content" lang="fa">

                    <div className="container-fluid col-sm-10 box white-back" lang="fa">
    <span className="container btn-group col-sm-8 choices white-back" dir="rtl" lang="fa">
        <button type="button" className="btn btn-primary orders pink-back white-font" dir="rtl"
                onClick={this.goToCredit} lang="fa">افزایش اعتبار</button>
        <button type="button" className="btn btn-primary credit white-back black-font left-border" dir="rtl"
                onClick={this.goToOrders} lang="fa">سفارش ها</button>
    </span>

                        <div className="inner" lang="fa">
                            <form className="form-inline" dir="rtl" lang="fa">
            <span className="form-input" dir="rtl" lang="fa">
                    <input type="text" className="form-control gray-back down" placeholder="میزان افزایش اعتبار"
                           size="30" dir="rtl" lang="fa"/>
            </span>
                                <span className="form-btn" dir="rtl" lang="fa">
                <button type="submit" className="btn submit-btn down" dir="rtl" lang="fa">افزایش</button>
            </span>
                            </form>
                        </div>
                    </div>
                </div>


                <footer className="footer" dir="rtl" lang="fa">
                    <p lang="fa">&copy; تمامی حقوق متعلق به لقمه است.</p>
                </footer>
            </div>
        );
    }

}
import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {Credit} from "./credit";
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
                <div className="container-fluid new-content" lang="fa">

                    <div className="container-fluid col-sm-10 box white-back" lang="fa">
            <span className="container btn-group col-sm-8 choices pink-back" dir="rtl" lang="fa">
        <button type="button" className="btn btn-primary orders black-font white-back" dir="rtl"
                onClick={this.goToCredit} lang="fa">افزایش اعتبار</button>
        <button type="button" className="btn btn-primary credit white-font pink-back left-border" dir="rtl"
                onClick={this.goToOrders} lang="fa">سفارش ها</button>
    </span>
                        <br className="clear"/>
                        <form className="col-sm-12 new-inner" action="post" dir="rtl" lang="fa">
                            <div className="col-sm-9 row " lang="fa">
                                <div className="restaurant-order black-font count-width" lang="fa">۱</div>
                                <div className="restaurant-name-width restaurant-order black-font" lang="fa">رستوران خامس</div>
                                <div className="situation restaurant-order black-font" lang="fa">
                    <span className="form-btn" dir="rtl" lang="fa">
                        <button type="button" className="btn on-way" dir="rtl" disabled lang="fa">پیک در مسیر</button>
                    </span>

                                </div>
                            </div>
                            <div className="col-sm-9 row " lang="fa">
                                <div className="restaurant-order black-font count-width" lang="fa">۲</div>
                                <div className="restaurant-name-width restaurant-order black-font" lang="fa">رستوران خامس</div>
                                <div className="situation restaurant-order black-font" lang="fa">
                    <span className="form-btn" dir="rtl" lang="fa">
                        <button type="button" className="btn searching dark-green" dir="rtl" disabled lang="fa">در جست و جوی پیک</button>
                    </span>

                                </div>
                            </div>
                            <div className="col-sm-9 row " lang="fa">
                                <div className="restaurant-order black-font count-width" lang="fa">۳</div>
                                <div className="restaurant-name-width restaurant-order black-font" lang="fa">رستوران خامس</div>
                                <div className="situation restaurant-order black-font" lang="fa">
                    <span className="form-btn" dir="rtl" lang="fa">
                        <button type="button" className="btn done black-font" dir="rtl" lang="fa">مشاهده فاکتور</button>
                    </span>

                                </div>
                            </div>

                            <div className="col-sm-9 row " lang="fa">
                                <div className="restaurant-order black-font count-width" lang="fa">۴</div>
                                <div className="restaurant-name-width restaurant-order black-font" lang="fa">رستوران خامس</div>
                                <div className="situation restaurant-order black-font" lang="fa">
                    <span className="form-btn" dir="rtl" lang="fa">
                        <button type="button" className="btn done black-font" dir="rtl" lang="fa">مشاهده فاکتور</button>
                    </span>

                                </div>
                            </div>

                            <div className="col-sm-9 row " lang="fa">
                                <div className="restaurant-order black-font count-width" lang="fa">۵</div>
                                <div className="restaurant-name-width restaurant-order black-font" lang="fa">رستوران خامس</div>
                                <div className="situation restaurant-order black-font" lang="fa">
                    <span className="form-btn" dir="rtl" lang="fa">
                        <button type="button" className="btn done black-font" dir="rtl" lang="fa">مشاهده فاکتور</button>
                    </span>

                                </div>
                            </div>

                            <div className="col-sm-9 row " lang="fa">
                                <div className="restaurant-order black-font count-width" lang="fa">۶</div>
                                <div className="restaurant-name-width restaurant-order black-font" lang="fa">رستوران خامس</div>
                                <div className="situation restaurant-order black-font" lang="fa">
                    <span className="form-btn" dir="rtl" lang="fa">
                        <button type="button" className="btn done black-font" dir="rtl" lang="fa">مشاهده فاکتور</button>
                    </span>

                                </div>
                            </div>

                            <div className="col-sm-9 row " lang="fa">
                                <div className="restaurant-order black-font count-width" lang="fa">۷</div>
                                <div className="restaurant-name-width restaurant-order black-font" lang="fa">رستوران خامس</div>
                                <div className="situation restaurant-order black-font" lang="fa">
                    <span className="form-btn" dir="rtl" lang="fa">
                        <button type="button" className="btn done black-font" dir="rtl" lang="fa">مشاهده فاکتور</button>
                    </span>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}
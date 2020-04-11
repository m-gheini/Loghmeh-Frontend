import React from "react";
import ReactDOM from 'react-dom';
import logo from '../Assets/LOGO.png';
import {Credit} from "./credit";

export class Orders extends React.Component{
    constructor(props) {
        super(props);
        this.goToOrders = this.goToOrders.bind(this);
        this.goToCredit = this.goToCredit.bind(this);
    }
    goToOrders(){
        ReactDOM.render(<Orders />,document.getElementById("root"));
    }
    goToCredit(){
        ReactDOM.render(<Credit />,document.getElementById("root"))
    }
    render() {
        return (
            <div className="whole">
                <nav className="navbar fix-navbar  fixed-top white-back black-font navbar-expand-sm navbar-light bg-white" lang="fa">
                    <div className="container-fluid navbar-content" lang="fa">
                        <ul className="nav navbar-nav navbar-right" lang="fa">
                            <li className="list-item"><a href="home.html" lang="fa"><img className="img-responsive logo"
    src={logo} alt="Loghmeh Logo"/></a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav" lang="fa">
                            <li className="list-item " dir="rtl"><a className="exit" href="signIn.html" lang="fa">خروج</a></li>
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


                <footer className="footer" dir="rtl" lang="fa">
                    <p lang="fa">&copy; تمامی حقوق متعلق به لقمه است.</p>
                </footer>
            </div>
        );
    }

}
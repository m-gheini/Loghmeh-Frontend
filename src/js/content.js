// import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from '../Assets/LOGO.png';
// export class MenuSection extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return(
//             <nav className="navbar fix-navbar  fixed-top white-back black-font navbar-expand-sm navbar-light bg-white" lang="fa" >
//                 <div className="container-fluid navbar-content" lang="fa">
//                     <ul className="nav navbar-nav navbar-right" lang="fa">
//                         <li className="list-item" lang="fa">
//                             <a href="#"><img  className="img-responsive logo" src={logo} alt="Logo" /></a>
//                         </li>
//                     </ul>
//                     <ul className="nav navbar-nav" lang="fa">
//                         <li className="list-item " dir="rtl"><a className="exit" lang="fa" href="#">خروج</a>
//                         </li>
//                         <li className="list-item " dir="rtl"><a className="account" href="#" lang="fa">حساب کاربری</a>
//                         </li>
//                         <li className="list-item" dir="rtl">
//                             <a href="#">
//                                 <i className="flaticon-smart-cart "/>
//                                 <span className="dot" lang="fa">۳</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
// }
// ReactDOM.render(<MenuSection/>, document.getElementById('header'));
//
// // class BodySection extends React.Component {
// //     // constructor() {
// //     //     super();
// //     // }
// //     render() {
// //         return (
// //             <div className="container-fluid main-content " lang="fa">
// //                 <div className="col-sm-6 sighnup-div white-back" lang="fa">
// //                     <div className="form-div" dir="rtl" lang="fa">
// //                         فرم ورود
// //                     </div>
// //                     <form className="col-sm-10 signup-form" action="#" dir="rtl" lang="fa">
// //                         <div className="form-group" dir="rtl" lang="fa">
// //                             <label htmlFor="email" dir="rtl" className="label dark-green"
// //                                    lang="fa">پست الکترونیک:</label>
// //                             <input type="email" className="form-control gray-back" dir="rtl" id="email"
// //                                    placeholder="پست الکترونیک" required lang="fa"/>
// //                         </div>
// //                         <div className="form-group" dir="rtl" lang="fa">
// //                             <label htmlFor="pwd" dir="rtl" className="label dark-green" lang="fa">رمز عبور:</label>
// //                             <input type="password" className="form-control gray-back" id="pwd" dir="rtl"
// //                                    placeholder="رمز عبور" required lang="fa"/>
// //                         </div>
// //                         <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl"
// //                                 lang="fa">ورود
// //                         </button>
// //                         <p className="no-account">
// //                             کاربر جدید هستید؟
// //                             <a href="#" className="new-user">ثبت نام کنید.</a>
// //                         </p>
// //                     </form>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }
// function BodySection() {
//     return (
//             <div className="container-fluid main-content " lang="fa">
//                 <div className="col-sm-6 sighnup-div white-back" lang="fa">
//                     <div className="form-div" dir="rtl" lang="fa">
//                         فرم ورود
//                     </div>
//                     <form className="col-sm-10 signup-form" action="#" dir="rtl" lang="fa">
//                         <div className="form-group" dir="rtl" lang="fa">
//                             <label htmlFor="email" dir="rtl" className="label dark-green"
//                                    lang="fa">پست الکترونیک:</label>
//                             <input type="email" className="form-control gray-back" dir="rtl" id="email"
//                                    placeholder="پست الکترونیک" required lang="fa"/>
//                         </div>
//                         <div className="form-group" dir="rtl" lang="fa">
//                             <label htmlFor="pwd" dir="rtl" className="label dark-green" lang="fa">رمز عبور:</label>
//                             <input type="password" className="form-control gray-back" id="pwd" dir="rtl"
//                                    placeholder="رمز عبور" required lang="fa"/>
//                         </div>
//                         <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl"
//                                 lang="fa">ورود
//                         </button>
//                         <p className="no-account">
//                             کاربر جدید هستید؟
//                             <a href="#" className="new-user">ثبت نام کنید.</a>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         );
// }
//
//
// export function FooterSection() {
//     return(
//         <footer className="footer" dir="rtl"  lang="fa">
//             <p lang="fa">&copy; تمامی حقوق متعلق به لقمه است.</p>
//         </footer>
//     );
// }
import React from "react";
import logo from '../Assets/LOGO.png'
import ReactDOM from 'react-dom';

export class SignIn extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div class="whole">
                <nav
                    className="navbar fix-navbar white-back black-font  fixed-top navbar-expand-sm navbar-light bg-white">
                    <div className="container-fluid navbar-content">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="list-item">
                                <a href="home.html" className="logo-link"><img className="img-responsive logo" src={logo} alt="Loghmeh Logo"/></a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid main-content " lang="fa">
                    <div className="col-sm-6 sighnup-div white-back" lang="fa">
                        <div className="form-div" dir="rtl" lang="fa">فرم ورود</div>
                            <form className="col-sm-10 signup-form" action="credit.html" dir="rtl" lang="fa">
                                <div className="form-group" dir="rtl" lang="fa">
                                    <label htmlFor="email" dir="rtl" className="label dark-green" lang="fa">پست الکترونیک:</label>
                                    <input type="email" className="form-control gray-back" dir="rtl" id="email" placeholder="پست الکترونیک" required lang="fa"/>
                                </div>
                                <div className="form-group" dir="rtl" lang="fa">
                                    <label htmlFor="pwd" dir="rtl" className="label dark-green" lang="fa">رمز عبور:</label>
                                    <input type="password" className="form-control gray-back" id="pwd" dir="rtl"
    placeholder="رمز عبور" required lang="fa"/>
                                </div>
                                <button type="submit" className="col-sm-12 btn btn-default sub-btn dark-green" dir="rtl"
                                    lang="fa">ورود
                                </button>
                                <p className="no-account">
                                کاربر جدید هستید؟
                                    <a href="signUp.html" className="new-user">ثبت نام کنید.</a>
                                </p>
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
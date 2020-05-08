import React from 'react';
import ReactDOM from 'react-dom';
import {SignIn} from './js/signIn';
import '../src/css/normalize.css'
import '../src/css/index.css';
import '../src/font/flaticon.css'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import {SignUp} from "./js/signUp";
import {Home} from "./js/home";
import {Orders} from "./js/orders";
import {Credit} from "./js/credit";
import {Restaurant} from "./js/restaurant";
// import App from './App';

ReactDOM.render(
    <Router>
    <Switch >
        <Route path="/login"><SignIn /></Route>
        <Route path="/register"><SignUp /></Route>
        <Route path="/home"><Home /></Route>
        <Route path="/userOrders"><Orders /></Route>
        <Route path="/userCredit"><Credit /></Route>
        <Route path="/restaurantInfo"><Restaurant /></Route>
        <Redirect to="/login"><SignIn /></Redirect>
        <SignIn/>

    </Switch>
    </Router>
    ,
    document.getElementById('root')
);
// ReactDOM.render(
//     <Router>
//         <Route url="/login">
//             <SignIn/>
//         </Route>
//     </Router>
//     ,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

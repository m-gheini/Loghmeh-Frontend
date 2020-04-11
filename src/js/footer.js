import React from "react";
import logo from '../Assets/LOGO.png'
import ReactDOM from 'react-dom';

export class FooterSection extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <footer className="footer" dir="rtl" lang="fa" >
               <p lang="fa">&copy; تمامی حقوق متعلق به لقمه است.</p>
            </footer>
        );
    }

}
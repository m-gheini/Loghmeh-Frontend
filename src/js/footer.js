import React from "react";

export class Footer extends React.Component{
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
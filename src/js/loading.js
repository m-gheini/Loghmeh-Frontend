import React from "react";
import ReactDOM from 'react-dom';
import spinner from '../Assets/spinner.gif';

export class Loader extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div className= "loader">
                <div className="in-loader">
                    <img src={spinner}/>
                </div>
            </div>
        );
    }

}
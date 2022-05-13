import React, { Component } from "react";
import './Nav.css';
import logo from '../../media/chatlogo.png';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__blocks">
                    <img src={logo} alt="chatlogo"></img>
                </div>
                <div className="nav__blocks"></div>
                <div className="nav__blocks"></div>
            </div>
        )
    }
}
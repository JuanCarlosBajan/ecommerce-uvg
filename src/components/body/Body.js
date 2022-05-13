import React, { Component } from "react";
import './Body.css';
import Content from '../content/Content';

export default class Body extends Component {
    render() {
        return (
            <div className="Body">
                <Content />
            </div>
        )
    }
}
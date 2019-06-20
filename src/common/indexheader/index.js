import React, { Component } from 'react';
import "./index.scss"
import LOGO from "@static/img/logo.png"

export default class IndexHeader extends Component{
    render(){
        return(
            <div className="header">
                <div className="indexheader">
                    <img src={LOGO}/>
                    <div className="sex">
                        <a href="#">男生</a>
                        <a href="#">女生</a>
                    </div>
                    <div className="icons">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="searchbox">
                    <a href="#" className="search">
                        <p>武动乾坤</p>
                        <span></span>
                    </a>
                </div>
            </div>
            
        )
    }
}
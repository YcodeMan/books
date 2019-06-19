import React, { Component } from 'react';
import "./index.scss"




export default class Nav extends Component{
    render(){
        return(
            <div className="indexnav">
                <div className="nav">
                    <a href="#" className="navlist">
                        <i></i>
                        <span>书架</span>
                    </a>
                    <a href="#" className="navlist">
                        <i></i>
                        <span>排行</span>
                    </a>
                    <a href="#" className="navlist">
                        <i></i>
                        <span>VIP</span>
                    </a>
                    <a href="#" className="navlist">
                        <i></i>
                        <span>充值</span>
                    </a>
                </div>
                <div className="recoder">
                    <a href="#" className="history"><span>最近阅读</span></a>
                    <a href="#" className="read"><span>爱有余温，深情不及&nbsp;第四章</span></a>
                </div>
            </div>
        )
    }
}
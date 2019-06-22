import React, { Component,Fragment} from 'react';
import {HashRouter as Router, Route, Redirect,Switch,NavLink} from 'react-router-dom'
import "./index.scss"

export default class Nav extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <div className="indexnav">
                        <div className="nav">
                            <NavLink to="./bookHistory" className="navlist">
                                <i></i>
                                <span>书架</span>
                            </NavLink>
                            <a href="" className="navlist">
                                <i></i>
                                <span>排行</span>
                            </a>
                            <a href="" className="navlist">
                                <i></i>
                                <span>VIP</span>
                            </a>
                            <a href="" className="navlist">
                                <i></i>
                                <span>充值</span>
                            </a>
                        </div>
                        <div className="recoder">
                            <a href="#" className="history"><span>最近阅读</span></a>
                            <a href="#" className="read"><span>爱有余温，深情不及&nbsp;第四章</span></a>
                        </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}
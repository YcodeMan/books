import React, { Component,Fragment } from 'react';
import "./index.scss"
import LOGO from "@static/img/logo.png"
import {HashRouter as Router, Switch,NavLink} from 'react-router-dom'
export default class IndexHeader extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Fragment>
                    <div className="header">
                        <div className="indexheader">
                            <img src={LOGO}/>
                            <div className="sex">
                                <NavLink to="./boybooks">
                                    男生
                                </NavLink>
                                <NavLink to="./girlbooks">
                                    女生
                                </NavLink>
                            </div>
                            <div className="icons">
                                <NavLink to="./bookshelf">
                                    <span className="bookshelf"></span>
                                </NavLink>
                                <NavLink to="./login">
                                    <span className="login"></span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="searchbox">
                            <a href="#" className="search">
                                <p>武动乾坤</p>
                                <span></span>
                            </a>
                        </div>
                    </div>
                    </Fragment>
                </Switch>
            </Router>
            
        )
    }
}
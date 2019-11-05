import React, { Component } from 'react';
import Hammer from "react-hammerjs"
import style from "./index.scss"


export default class PageHeader extends Component{
    render(){
        return(
            <header className={style.pageHeader}>
                <Hammer onTap={this.back.bind(this)}>
                    <span className={style.back}>
                        <i className={style.icon}></i>
                        <i>返回</i>
                    </span>
                </Hammer>
            <h1>斗罗大陆</h1>
            <div className={style.goto}>
                <a href="" className={style.bookshelf}></a>
            </div>
        </header>
        )
    }
    back() {
        this.props.history.goBack()
    }
}

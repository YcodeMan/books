import React, { Component } from 'react';
import style from "./index.scss"


export default class PageFooter extends Component{
    render(){
        return(
            <footer className={style.footer}>
                <span>上一章</span>
                <span>目录</span>
                <span>下一章</span>
            </footer>
        )
    }
}

import React, { Component } from 'react';
import "./index.scss"
import BookList from "../../common/bookList"



export default class BoyHotBooks extends Component{
    render(){
        return(
            <div className="boyhotbooks">
                <div className="title">
                    <h3>男生热门</h3>
                </div>
                <BookList/>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
}
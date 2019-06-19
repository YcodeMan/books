import React, { Component } from 'react';
import "./index.scss"
import BookList from "../../common/bookList"



export default class ShortBook extends Component{
    render(){
        return(
            <div className="shortbooks">
                <div className="title">
                    <h3>畅销短篇</h3>
                </div>
                <BookList/>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
}
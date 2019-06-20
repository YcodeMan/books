import React, { Component } from 'react';
import "./index.scss"
import BookList from "../../common/bookList"

export default class GirlRedBooks extends Component{
 
    render(){
        return(
            <div className="girlredbooks">
                <div className="title">
                    <h3>女生红文区</h3>
                </div>
                <BookList/>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
}
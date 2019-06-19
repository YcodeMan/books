import React, { Component } from 'react';
import "./index.scss"
import BookList from "../../common/bookList"



export default class BoyGodBooks extends Component{
    render(){
        return(
            <div className="boygodbooks">
                <div className="title">
                    <h3>男生大神区</h3>
                </div>
                <BookList/>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
}
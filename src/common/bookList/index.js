import React, { Component } from 'react';
import "./index.scss"

export default class BookList extends Component{
    render(){
        return(
            <div className="booklist">
                <a href="#" className="booklistinfo">
                    <img className="bookpic" src="../../../public/images/book.png"/>
                    <div className="bookcontent">
                        <h3>身有千千劫&nbsp;<span>完结</span></h3>
                        <p className="bookmsg">认识白芊芊的人都知道，她爱墨沉渊，爱到1点自尊都没有！所有人都以为她嫁给了墨沉渊
                            ，是念念不忘必有回响的结果。殊不知，他娶她，是为了1步1步将她逼进见不到低的深渊！
                            直到，她想放弃他的时候，他画地为牢，将她死死地束缚在深情里！
                        </p>
                        <p className="bookkinds">
                            <span>都市生活 &nbsp;|&nbsp;<b>16</b>人气</span>
                            <i>现代言情</i>
                        </p>
                    </div>
                </a>
            </div>
        )
    }
}
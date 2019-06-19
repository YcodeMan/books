import React, { Component } from 'react';
import "./index.scss"
import BookList from "../../common/bookList"



export default class GirlNiceBooks extends Component{
    render(){
        return(
            <div className="girlnicebooks">
                <div className="title">
                    <h3>女生佳作</h3>
                </div>
                <div className="kindslist">
                    <a href="#">现代</a>
                    <a href="#">女尊</a>
                    <a href="#">古言</a>
                    <a href="#">校园</a>
                </div>
                <BookList/>
                <div class="sublist">
                    <h4>
                        <i>现代言情</i>
                        <span>隐婚深爱，前妻不好追</span>
                        <b>慕夏</b>
                    </h4>
                    <p>三年隐婚，这场婚姻与他无关，他不爱她，甚至恨她。人前恩爱有佳，人后陌生有度。
                        这是他们婚后的相处模式，她淡定地看着他对外面的女人温柔相待，转眼对她冷漠如斯。
                        可为什么他见不得别的男人惦记她，他阻断了她身边一切异性，包括她养只小宠物，都被他换成了雌性。
                        终于，真相大白的那一天，看到车祸后再也叫不醒的她，他感到失去了整个世界。
                    </p>
                </div>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
}
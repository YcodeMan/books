import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./index.scss"

export default class MySwiper extends Component{
    componentDidMount(){
         new Swiper ('.swiper-container', {
            autoplay: true, 
            loop: true, 
            // 分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })        
    }
    render(){
        return(
            <div className="swiper-container" ref="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="../../../public/images/1.png"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="../../../public/images/2.png"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="../../../public/images/3.png"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="../../../public/images/4.png"/>
                    </div>
                </div>
                <div className="swiper-pagination" ref="pagination"></div>
            </div>
        )
    }
}
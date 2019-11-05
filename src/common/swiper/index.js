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
                        <img src="http://statics.zhuishushenqi.com/recommendPage/155928629891423"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="http://statics.zhuishushenqi.com/recommendPage/15592861974182"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="http://statics.zhuishushenqi.com/recommendPage/156085172562687"/>
                    </div>
                    <div className="swiper-slide">
                        <img src="http://statics.zhuishushenqi.com/recommendPage/156085178151592"/>
                    </div>
                </div>
                <div className="swiper-pagination" ref="pagination"></div>
            </div>
        )
    }
}
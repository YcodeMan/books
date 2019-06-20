import React,{Component} from 'react'
import CarToonList from "../../common/cartoonList"
import CarToonListT from "../../common/cartoonListT"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./index.scss"


export default class CarToon extends Component{
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
    render() {
        return(
            <div className="cartoon">
    {/* ----轮播模块----- */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="/src/static/img/manhua1.png"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/static/img/manhua2.png"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/static/img/manhua3.png"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/static/img/manhua4.png"/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
    {/* -----分类导航模块------- */}
                <div className="cartoonNav">
                    <div className="nav">
                        <a href="#">
                            <i></i>
                            <span>分类</span>
                        </a>
                        <a href="#">
                            <i></i>
                            <span>排行</span>
                        </a>
                        <a href="#">
                            <i></i>
                            <span>VIP专区</span>
                        </a>
                    </div>
                </div>
    {/* ----人气推荐- 2版------- */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic1"></i>
                            <span>人气推荐</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <CarToonList/>
                </div>
    {/* --------独家首发--3版------ */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic2"></i>
                            <span>独家首发</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <a className="firstBig">
                        <img className="bigbanner"  src="/src/static/img/bigpic.png"/>
                        <h4>拂晓的花嫁</h4>
                        <p>沉沦在你的鲜血里</p>
                    </a>
                    
                    <CarToonListT/>
                </div>
    {/* --------热血少年--2版------ */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic3"></i>
                            <span>热血少年</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <CarToonList/>
                </div>
    {/* --------完结佳作--3版------ */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic4"></i>
                            <span>完结佳作</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <CarToonListT/>
                </div>
    {/* --------少女纯爱-2版------- */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic5"></i>
                            <span>少女纯爱</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <CarToonList/>
                </div>
    {/* --------强力推荐--3版------ */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic6"></i>
                            <span>强力推荐</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <CarToonListT/>
                </div>
    {/* --------抢看新作-2版------- */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic7"></i>
                            <span>抢看新作</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <CarToonList/>
                </div>
    {/* --------VIP免费--3版------ */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic8"></i>
                            <span>VIP免费</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <CarToonListT/>
                </div>
    {/* --------爆笑治愈--3版------ */}
                <div className="personHot">
                    <h4 className="title">
                        <div className="titleLeft">
                            <i className="iconPic9"></i>
                            <span>爆笑治愈</span>
                        </div>
                        <a href="#" className="titleRight">
                            <span>查看更多</span>
                            <i></i>
                        </a>
                    </h4>
                    <CarToonListT/>
                </div>
            </div>
        )
    }
}
import React,{Component} from 'react'
import CarToonBookList from "@common/cartoonList"

import CarToonListT from "@common/cartoonListT"
import PageFooter from "@common/pageFooter"
import {connect} from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./index.scss"
import {actiongetAllBooks} from '@actions/cartoon/actionCreator'

class CarToon extends Component{
    constructor(){
        super()
    }
    render() {
        return(
            <div className="cartoon">
    {/* ----轮播模块----- */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="http://statics.zhuishushenqi.com/recommendPage/156032547395897"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="http://statics.zhuishushenqi.com/recommendPage/156093425599982"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="http://statics.zhuishushenqi.com/recommendPage/156093429624665"/>
                        </div>
                        <div className="swiper-slide">
                            <img src="http://statics.zhuishushenqi.com/recommendPage/156093432990518"/>
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
                    <CarToonBookList/>
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
                        <img className="bigbanner"  src="http://statics.zhuishushenqi.com/cover/154901345081447?imageView2/3/w/750/h/310/q/40"/>
                        <h4>拂晓的花嫁</h4>
                        <p>沉沦在你的鲜血里</p>
                    </a>
                    
                    <CarToonBookList/>
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
                    <CarToonBookList/>
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
                    <CarToonBookList/>
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
                    <CarToonBookList/>
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
                <PageFooter/>
            </div>
        )
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
           autoplay: true, 
           loop: true, 
           // 分页器
           pagination: {
             el: '.swiper-pagination',
           },
         })
         this.props.getAllHotBloodBooks()        
    }
    
}

const mapStateToProps = (state) => ({
    
})
const mapDispacthToProps = (dispatch) => ({
    getAllHotBloodBooks(){
        dispatch(actiongetHotBloodBooks())
    }
})

export default connect(mapStateToProps,mapDispacthToProps)(CarToon)
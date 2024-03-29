import React, { Component} from 'react'
import CarToonBookList from "@common/cartoonList"
import NewCartoonBooks from "@common/cartoonListT"
import PageFooter from "@common/pageFooter"
import { connect } from 'react-redux'
import PageHeader from '@common/pageHeader'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./index.scss"
import {
    actiongetHotBloodBooks,
    actiongetAllLaughBooks,
    actiongetAllLoveBooks,
    actiongetAllMagicBooks,
} from '@actions/cartoon/actionCreator'

class CarToon extends Component {
    constructor() {
        super()
    }
    render() {
        let { hotbloodbooks } = this.props
        let rqbooks = hotbloodbooks.slice(5, 9)
        let djbooks = hotbloodbooks.slice(11, 14)
        let { laughbooks } = this.props
        let finishbooks = laughbooks.slice(10, 16)
        let { lovebooks } = this.props
        let vipbooks = lovebooks.slice(14, 20)
        let { magicbooks } = this.props
        let newbooks = magicbooks.slice(11, 15)
        let icon={
            index: 'index'
        }
        return (
            <div className="cartoon" id="cartoon">
                <PageHeader title="漫画专区" icon={icon}/>
                {/* ----轮播模块----- */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="http://statics.zhuishushenqi.com/recommendPage/156032547395897" />
                        </div>
                        <div className="swiper-slide">
                            <img src="http://statics.zhuishushenqi.com/recommendPage/156093425599982" />
                        </div>
                        <div className="swiper-slide">
                            <img src="http://statics.zhuishushenqi.com/recommendPage/156093429624665" />
                        </div>
                        <div className="swiper-slide">
                            <img src="http://statics.zhuishushenqi.com/recommendPage/156093432990518" />
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
                    <CarToonBookList val={rqbooks} />
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
                    {
                        hotbloodbooks.slice(16, 17).map((item, index) => (
                            <a href={item.getIn(["_id"])} className="firstBig" key={index} >
                                <img className="bigbanner" src="http://statics.zhuishushenqi.com/cover/154901345081447?imageView2/3/w/750/h/310/q/40" />
                                <h4>{item.getIn(["title"])}</h4>
                                <p>{item.getIn(["shortIntro"])}</p>
                            </a>
                        ))
                    }
                    <NewCartoonBooks val={djbooks} />
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
                    <CarToonBookList val={hotbloodbooks} />
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
                    <NewCartoonBooks val={finishbooks} />
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
                    <CarToonBookList val={lovebooks} />
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
                    <NewCartoonBooks val={magicbooks} />
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
                    <CarToonBookList val={newbooks} />
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
                    <NewCartoonBooks val={vipbooks} />
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
                    <NewCartoonBooks val={laughbooks} />
                </div>
                <PageFooter />
            </div>
        )
    }
 
    componentDidMount() {
      
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            // 分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
        this.props.getAllHotBloodBooks()
        this.props.getAllLaughBooks()
        this.props.getAllLoveBooks()
        this.props.getAllMagicBooks()
    }

}

const mapStateToProps = (state) => ({
    hotbloodbooks: state.getIn(["cartoon", "hotbloodbooks"]),
    laughbooks: state.getIn(["cartoon", "laughbooks"]),
    lovebooks: state.getIn(["cartoon", "lovebooks"]),
    magicbooks: state.getIn(["cartoon", "magicbooks"])
})
const mapDispacthToProps = (dispatch) => ({
    getAllHotBloodBooks() {
        dispatch(actiongetHotBloodBooks())
    },
    getAllLaughBooks() {
        dispatch(actiongetAllLaughBooks())
    },
    getAllLoveBooks() {
        dispatch(actiongetAllLoveBooks())
    },
    getAllMagicBooks() {
        dispatch(actiongetAllMagicBooks())
    }
})

export default connect(mapStateToProps, mapDispacthToProps)(CarToon)
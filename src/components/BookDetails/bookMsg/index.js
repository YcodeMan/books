import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter ,NavLink} from 'react-router-dom'
import styled from './index.scss'
import immutable from 'immutable'

import BookIntorduction from '@components/BookDetails/bookIntroduction'
import BookHotComment from '@components/BookDetails/bookHotComment'
import BookMore from '@components/BookDetails/bookMore'
import PageHeader from '@common/pageHeader'
import PageFooter from '@common/pageFooter'
import Hammer from 'react-hammerjs'
import getRandBook from '@filters/getRandomBook'

import { actionGetBookDetail } from '@actions/bookDetails/actionCreator'


class BookMsg extends Component {
    constructor() {
        super()
        this.state = {
            msgArr: null
        }
    }
    render() {
        let { bookDetail } = this.props
        return (
            <Fragment>
                <PageHeader title={bookDetail.getIn(['title'])} />
                <div className='book'>
                    <img src={bookDetail.getIn(['Img'])} />
                    <div>
                        <h3>{bookDetail.getIn(['title'])}</h3>
                        <p>
                            <a className={styled.c_red}>{bookDetail.getIn(['author'])}</a>
                            <i>|</i>
                            <span>{bookDetail.getIn(['cat'])}</span>
                            <i>|</i>
                            <span>{bookDetail.getIn(['wordAll'])}</span>
                        </p>
                        <p>{bookDetail.getIn(['bookState'])}</p>
                    </div>
                </div>
                <div className='read_link'>
                    <a>加入书架</a>
                    {/* <a > */}
                        <NavLink className={styled.readBtn} to="/readPage">
                        开始阅读
                        </NavLink>
                        {/* </a> */}
                </div>
                <div className="reader-data">
                    <p>
                        <span>追人气</span>
                        <i>{bookDetail.getIn(['latelyFollower'])}</i>
                    </p>
                    <p>
                        <span>读者留存率</span>
                        <i>{bookDetail.getIn(['retentionRatio'])}%</i>
                    </p>
                    <p>
                        <span>日更字数/天</span>
                        <i>{bookDetail.getIn(['serializeWordCount'])}</i>
                    </p>
                </div>
                <Hammer onPanStart={this.swipeUp.bind(this)}>
                    <div>
                        <BookIntorduction />
                        <BookHotComment />
                    </div>
                </Hammer>
                {
                    this.state.msgArr ? (
                        <div>
                            <BookMore IntersetBookArr={this.state.msgArr} />
                            <PageFooter />
                        </div>
                    ) : ''
                }
            </Fragment>
        )
    }
    componentWillMount() {
        let { id } = this.props.location.params || this.props
        this.props.getBookDetails(id)
    }
    swipeUp(e) {
        let { msgArr } = this.state
        if (e.distance > 300 && !msgArr) {
            let bookClass = this.props.bookDetail.getIn(['majorCate'])
            switch (bookClass) {
                case '武侠':
                    msgArr = getRandBook(this.props.gfinishbooks.toArray(), 4)
                    break;
                case '都市':
                    msgArr = getRandBook(this.props.citybooks.toArray(), 4)
                    
                    break;
                case '奇幻':
                    msgArr = getRandBook(this.props.qhuanbooks.toArray(), 4)

                    break;
                case '现代言情':
                    msgArr = getRandBook(this.props.girlbooks.toArray(), 4)

                    break;
                case '仙侠':
                    msgArr = getRandBook(this.props.xxianbooks.toArray(), 4)
                    break;
                default:
                    msgArr = getRandBook(this.props.schoolbooks.toArray(), 4)
            }
           
            if (msgArr.length > 0) {
                let data = immutable.List(msgArr).toJS()
                window.sessionStorage.setItem('bookArr', 
                    JSON.stringify(data)
               )
            } 
            this.setState({
                msgArr: JSON.parse(window.sessionStorage.getItem('bookArr'))
            })
        }
    }   
}



const mapStateToProps = (state) => ({
    bookDetail: state.getIn(['bookDetails', 'bookDetail']),
    id: state.getIn(['bookDetails', 'id']),
    citybooks: state.getIn(['home', 'citybooks']),
    qhuanbooks: state.getIn(['home', 'qhuanbooks']),
    xxianbooks: state.getIn(['home', 'xxianbooks']),
    schoolbooks: state.getIn(['home', 'schoolbooks']),
    girlbooks: state.getIn(['home', 'girlbooks']),
    gfinishbooks: state.getIn(['home', 'gfinishbooks']),
})



const mapDispatchToProps = (dispatch) => ({
    getBookDetails(id) {
        dispatch(actionGetBookDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookMsg))
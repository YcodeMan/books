import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import styled from './index.scss'

import BookIntorduction from '@components/BookDetails/bookIntroduction'
import BookHotComment from '@components/BookDetails/bookHotComment'
import BookMore from '@components/BookDetails/bookMore'
import PageHeader from '@common/pageHeader'
import PageFooter from '@common/pageFooter'

import {actionGetBookDetail} from '@actions/bookDetails/actionCreator'


class BookMsg extends Component {
    constructor() {
        super()
        
    }
    render() {
        let {bookDetail} = this.props
        return (
            <Fragment>
                <PageHeader/>
                <div className='book'>
                    <img src={ bookDetail.getIn(['Img'])} />
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
                    <a className={styled.readBtn}>开始阅读</a>
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
                <BookIntorduction/>
                <BookHotComment/>
                <BookMore/>
                <PageFooter/>
            </Fragment>
        )
    }
    componentWillMount() {
        
        this.props.getBookDetails()
    }
}


const mapStateToProps = (state) => ({
    bookDetail: state.getIn(['bookDetails', 'bookDetail'])
})
   


const mapDispatchToProps = (dispatch) => ({
    getBookDetails() {
        dispatch(actionGetBookDetail())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookMsg)
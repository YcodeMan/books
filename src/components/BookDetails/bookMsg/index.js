import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import styled from './index.scss'
import Hammer from 'react-hammerjs'

import BookIntorduction from '@components/BookDetails/bookIntroduction'
import BookHotComment from '@components/BookDetails/bookHotComment'
import BookMore from '@components/BookDetails/bookMore'
import PageHeader from '@common/pageHeader'
import PageFooter from '@common/pageFooter'

import {actionGetBookDetail} from '@actions/bookDetails/actionCreator'


class BookMsg extends Component {
    constructor() {
        super()
        this.state = {
            icon : {
                bookshelf:'bookshelf',
                index:'index',
            }
        }
    }
    render() {
        let {bookDetail} = this.props
        let {icon} = this.state
        return (
            <Fragment>
                <PageHeader title={bookDetail.title} icon={icon} />
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
                    <Hammer onTap={this.addMyBooks.bind(this)}>
                        <a>加入书架</a>
                    </Hammer>
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

    //加入至书架
    addMyBooks(){
        let {_id,title,Img} = this.props.bookDetail.toJS();
        let mybooks = JSON.parse(window.localStorage.getItem('mybooks'));
        if (mybooks) {
            let falg = true
            mybooks.forEach(element => {
                if(element._id == _id) {
                    falg = false;
                    return ;
                }
            });
            if (falg) {
                mybooks.push({_id,title,Img})
                window.localStorage.setItem('mybooks',JSON.stringify(mybooks))
            }
        } else {
            mybooks=[{_id,title,Img}];
            window.localStorage.setItem('mybooks',JSON.stringify(mybooks))
        }
        console.log({_id,title,Img},mybooks)
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
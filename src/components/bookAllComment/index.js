import React,{Fragment} from 'react'
import BookHotComment from '@components/BookDetails/bookHotComment'
import PageHeader from '@common/pageHeader'
import {connect} from 'react-redux'
import Hammer from 'react-hammerjs'
import immutable from 'immutable'
import {actionGetBookComment} from '@actions/bookDetails/actionCreator'
import styled from './index.scss'

const bookAllComment = ({commentList, getCommentList, id, isNull, page}) => {
    commentList = commentList 
        || immutable.fromJS(JSON.parse(window.sessionStorage.getItem('commentMsg')))
   window.sessionStorage.setItem('commentMsg', JSON.stringify(commentList.toJS()))
    return (
        <Fragment>
            <PageHeader/>
            <Hammer onPanStart={getCommentList.bind(null, id,isNull,page)}>   
                <div>
                    <BookHotComment commentMsg={commentList} flag='hide'/>
                    {
                        isNull ? <p className={styled.text}>没有更多评论</p> : <p className={styled.text}>下拉加载更多</p>
                    }
                </div> 
            </Hammer>
            
        </Fragment>
        
    )
}



const mapStateToProps = (state) => ({
    commentList: state.getIn(['bookDetails', 'commentList', 'reviews']),
    id: state.getIn(['bookDetails', 'id']),
    isNull: state.getIn(['bookDetails', 'isNull']),
    page: state.getIn(['bookDetails', 'page']),
})
const mapDispatchToProps = (dispatch) => ({
    getCommentList(id,isNull,page) {
        if (!isNull) {
            dispatch(actionGetBookComment(id, page))
        }
        
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(bookAllComment)

import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from './index.scss'
import { actionGetBookComment } from '@actions/bookDetails/actionCreator'
const bookHotComment = ({ commentList, getBookComment, showComment }) => {
    console.log(showComment, 'daga')
    useEffect(() => {
        getBookComment()
    }, [])
    return (
        <Fragment>
            <div className='hotComment'>
                <h4>热门书评</h4>
                <a className={styled.arrow}>更多评论</a>
            </div>
            <ul> 
                {
                    showComment.map((key, val ) =>  {

                        console.log('key', key, '---')
                return  <li key={key}>
                            <a className="coment_list">
                                <img src={key.getIn(["author","avatar"])}/>
                                <div className="inner">
                                    <p className="name">{key.getIn(["author","nickname"])}</p>
                                    <p className="title">{key.getIn(['title'])}</p>
                                    <p className="score">
                                        <i className="star-full"></i>
                                        <i className="star-full"></i>
                                        <i className="star-full"></i>
                                        <i className="star-full"></i>
                                        <i className="star-full"></i>
                                    </p>
                                    <p className="content">
                                    {key.getIn(['content'])}  
                               </p>
                                    <p className="love">
                                        <span>5小时前</span>
                                        <span>{key.getIn(["helpful","yes"])}觉得有用</span>
                                    </p>
                                </div>

                            </a>
                        </li>
                    }

                    )


                }

            </ul>
        </Fragment>
    )

}

const mapStateToProps = (state) => ({
    commentList: state.getIn(['bookDetails', 'commentList']),
    showComment: state.getIn(['bookDetails', 'showComment'])
})



const mapDispatchToProps = (dispatch) => ({
    getBookComment() {
        
        dispatch(actionGetBookComment())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(bookHotComment)
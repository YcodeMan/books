import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from './index.scss'
import { actionGetBookComment } from '@actions/bookDetails/actionCreator'
const bookHotComment = ({ getBookComment, showComment }) => {
    let arr = []
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
                        // 重新设置数组
                        arr.length = key.getIn(['rating'])  
                        for(let i =0 ; i < key.getIn(['rating']); i++) {
                             arr.push(i)
                        }
                return  <li key={key}>
                            <a className="coment_list">
                                <img src={key.getIn(["author","avatar"])}/>
                                <div className="inner">
                                    <p className="name">{key.getIn(["author","nickname"])}</p>
                                    <p className="title">{key.getIn(['title'])}</p>
                                    <p className="score">
                                        {
                                            arr.map((item, index) => { 
                                                return  <i key={index} className="star-full"></i>
                                            })
                                        }
                                    </p>
                                    <p className="content">
                                    {key.getIn(['content'])}  
                               </p>
                                    <p className="love">
                                        <span>{key.getIn(['timeDiff'])}前</span>
                                        <span>{key.getIn(["helpful","yes"])}人觉得有用</span>
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
    showComment: state.getIn(['bookDetails', 'showComment'])
})



const mapDispatchToProps = (dispatch) => ({
    getBookComment() {
        
        dispatch(actionGetBookComment())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(bookHotComment)
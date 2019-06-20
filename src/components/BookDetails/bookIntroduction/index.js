import React, { Component, Fragment } from 'react'
import styled from './index.scss'
import {connect} from 'react-redux'
const bookIntorduction = ({bookDetail}) => {
    
    return (
        <Fragment>
            <div className='introduction'>
                <p>{bookDetail.getIn(['longIntro'])}</p>
                <span className={styled.arrow}>v</span>
            </div>
            <div>
                <a>
                    <div className="catalogue">
                        <span>目录</span>
                        <b>
                            <span>{bookDetail.getIn(['bookState'])}</span>
                             {bookDetail.getIn(['lastChapter'])}
                             <i>&gt;</i>
                        </b>
                    </div>
                </a>
            </div>
        </Fragment>

    )
}

const mapStateToProps = (state) => ({
    bookDetail: state.getIn(['bookDetails', 'bookDetail'])
})
   


const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(bookIntorduction)
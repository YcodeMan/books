import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from './index.scss'
const BookMore = () => {
    return (
        <Fragment>
            <div>
                <h4 className={styled.title}>
                        你可能感兴趣
                    <i className={styled.tip}></i>
                    <a href="/book/5941f9c2397ea57e04a0ed13/recommend" className="recommend-more">
                        <span>更多</span>
                    </a>
                </h4>
            </div>
            <div className={styled.content}>
                <a>
                    <img src='../../public/image/bookImg.jpg'/>
                    <span>霸主召唤系统</span>
                </a>
                <a>
                    <img src='../../public/image/bookImg.jpg'/>
                    <span>霸主召唤系统</span>
                </a>
                <a>
                    <img src='../../public/image/bookImg.jpg'/>
                    <span>霸主召唤系统</span>
                </a>
                <a>
                    <img src='../../public/image/bookImg.jpg'/>
                    <span>霸主召唤系统</span>
                </a>
            </div>
        </Fragment>
    )
}

const mapStateToPorps = (state) => ({

})

export default connect(mapStateToPorps, null)(BookMore)


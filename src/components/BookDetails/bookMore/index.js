import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from './index.scss'
const BookMore = ({ IntersetBookArr }) => {
    let bookArr = IntersetBookArr
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
                {
                    bookArr.map((item, index) => {
                        item.cover = decodeURIComponent(item.cover).replace('/agent/', "")
                     return <a key={index}>
                                <img src={item.cover} />
                                <span>{item.title}</span>
                            </a>
                    })
                }

            </div>
        </Fragment>
    )
}

const mapStateToPorps = (state) => ({

})

export default connect(mapStateToPorps, null)(BookMore)


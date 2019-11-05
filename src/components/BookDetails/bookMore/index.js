import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from './index.scss'
import Hammer from 'react-hammerjs'
import {withRouter} from 'react-router-dom'
const BookMore = ({ IntersetBookArr,getBookDetails, history}) => {
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
                     return <Hammer key={index} 
                            onTap={getBookDetails.bind(null,`${item._id}`, history)}>
                            <a>
                                <img src={item.cover} />
                                <span>{item.title}</span>
                            </a>
                     </Hammer>
                      
                    })
                }
            </div>
        </Fragment>
    )
    
}

const mapStateToPorps = (state) => ({
    getBookDetails(id, history) {
        history.go({
            params:{id}
        })
        window.sessionStorage.setItem('id', id)
    }
})

export default withRouter(connect(mapStateToPorps, null)(BookMore))


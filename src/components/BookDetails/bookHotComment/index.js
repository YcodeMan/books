import React, { Component, Fragment } from 'react'
import styled from './index.scss'

export default () => {
    return (
        <Fragment>
            <div className='hotComment'>
                <h4>热门书评</h4>
                <a className={styled.arrow}>更多评论</a>
            </div>
            <ul>
                <li>
                    <a className="coment_list">
                        <img />
                        <div className="inner">
                            <p className="name">落日天幕</p>
                            <p className="title">主角很恶心</p>
                            <p className="score">
                                <i className="star-full"></i>
                                <i className="star-full"></i>
                                <i className="star-full"></i>
                                <i className="star-full"></i>
                                <i className="star-full"></i>
                            </p>
                            <p className="content">
                                打五星是让你们看见。主角虽然是捡来的，但养父母一直把他当亲生的看待。
                                结果主角知道后就跑出去了，还说自己没有家了，那么多年白养了吗。
                                主角就是个白眼狼，写的再好也不想再看了。
                               </p>
                            <p className="love">
                                <span>5小时前</span>
                                <span>0人觉得有用</span>
                            </p>
                        </div>

                    </a>
                </li>
            </ul>
        </Fragment>

    )
}


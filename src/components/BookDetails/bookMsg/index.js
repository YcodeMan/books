import React, { Component, Fragment } from 'react'
import styled from './index.scss'
import BookIntorduction from '@components/BookDetails/bookIntroduction'

export default class BookMsg extends Component {
    render() {
        return (
            <Fragment>
                <div className='book'>
                    <img src="../../public/image/bookImg.jpg" />
                    <div>
                        <h3>我想我不会再爱你</h3>
                        <p>
                            <a className={styled.c_red}>咸移仁</a>
                            <i>|</i>
                            <span>都市生活</span>
                            <i>|</i>
                            <span>6万字</span>
                        </p>
                        <p>完结</p>
                    </div>
                </div>
                <div className='read_link'>
                    <a>加入书架</a>
                    <a className={styled.readBtn}>开始阅读</a>
                </div>
                <div className="reader-data">
                    <p>
                        <span>追人气</span> 
                        <i>1047</i>
                    </p>
                    <p>
                        <span>读者留存率</span>
                        <i>7.52%</i>
                    </p>
                    <p>
                        <span>日更字数/天</span> 
                        <i>0</i>
                    </p>
                </div>
                <BookIntorduction/>
            </Fragment>
        )
    }
}
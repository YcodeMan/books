import React from 'react'
import style from  './index.scss'

export default class PageHeader extends React.Component{
    render() {
        let {data} = this.props
        return (
            <header className={style.pageHeader}>
            <span className={style.back}>
                <i className={style.icon}></i>
                <i>返回</i>
            </span>
            <h1>{data.title}</h1>
            <div className={style.goto}>
                <a href="" className={style.bookshelf}></a>
                <a href="" className={style.index}></a>
            </div>
        </header>
        )
    }
}
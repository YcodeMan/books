import React from 'react'
import style from  './index.scss'
import Hammer from 'react-hammerjs'
import {withRouter} from 'react-router-dom'

class PageHeader extends React.Component{
    render() {
        let {title} = this.props
        return (
                <header className={style.pageHeader}>
                <Hammer onTap={this.back.bind(this)}>
                    <span className={style.back}>
                        <i className={style.icon}></i>
                        <i>返回</i>
                    </span>
                </Hammer>
            <h1>{title}</h1>
            <div className={style.goto}>
                <a href="" className={style.bookshelf}></a>
                <a href="" className={style.index}></a>
            </div>
        </header>
        )
    }
    back() {
        console.log(this)
        this.props.history.goBack()
    }
}

export default withRouter(PageHeader)
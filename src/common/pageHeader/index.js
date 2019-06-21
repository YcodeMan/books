import React from 'react'
import style from  './index.scss'
import Hammer from 'react-hammerjs'
import {withRouter} from 'react-router-dom'

/**
 * 
 * 公共子页面头部，
 * 需传两个参数，
 * @params 标题信息 title
 * @params 右侧icon图标 icon{
 *      bookshelf:'bookshelf',
 *      index:'index',
 *      login: 'login'
 * }
 * 
*/

class PageHeader extends React.Component{
    render() {
        let {title,icon} = this.props
        return (
                <header className={style.pageHeader}>
                <Hammer onTap={this.toBack.bind(this)}>
                    <span className={style.back}>
                        <i className={style.icon}></i>
                        <i>返回</i>
                    </span>
                </Hammer>
            <h1>{title}</h1>
            <div className={style.goto} >
                {
                    Object.keys(icon).map(item =>
                        item == 'bookshelf' ? <a href="/#/bookShelf/myBooks" className={style.bookshelf} key={item} />
                            : item == 'index' ? <a href="/" className={style.index} key={item} />
                                : item == 'login' ? <a href="/#/login" className={style.login} key={item} /> : ''        
                    )
                }
            </div>
        </header>
        )
    }
    toBack() {
        this.props.history.goBack()
    }
}

export default withRouter(PageHeader)
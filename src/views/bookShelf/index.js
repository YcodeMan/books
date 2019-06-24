import React, { Fragment } from 'react'
import style from './index.scss'
import { Route, Redirect, NavLink } from 'react-router-dom'
import PageHeader from '@common/pageHeader'
import PageFooter from '@common/pageFooter'
import MyBooks from '@components/bookShelf/myBooks'
import BookHistory from '@components/bookShelf/bookHistory'

export default class BookShelf extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '我的书架',
            icon: {
                bookshelf: 'bookshelf',
                index: 'index'
            },
            falg: 1
        }
    }
    render() {
        let { title, icon} = this.state
        return (
            <Fragment>
                <PageHeader title={title} icon={icon} />
                <div className={style.tab}>
                    <NavLink
                        className={style.item}
                        activeClassName={style.active}
                        to='/bookShelf/myBooks'>
                        我的书架
                        </NavLink>
                    <p className={style.line}></p>
                    <NavLink
                        className={style.item}
                        activeClassName={style.active}
                        to='/bookShelf/bookHistory'>
                        阅读记录
                        </NavLink>
                </div>
                <Route path='/bookShelf/myBooks' exact component={MyBooks} />
                <Route path='/bookShelf/bookHistory' exact component={BookHistory} />
                <Redirect from='/bookShelf' to='/bookShelf/myBooks' />
                <PageFooter />
            </Fragment>
        )
    }
}
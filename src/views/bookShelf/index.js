import React, { Fragment } from 'react'
import style from './index.scss'
import { Route, Redirect } from 'react-router-dom'
import PageHeader from '@common/pageHeader'
import PageFooter from '@common/pageFooter'
import MyBooks from '@components/bookShelf/myBooks'
import BookHistory from '@components/bookShelf/bookHistory'
import Hammer from 'react-hammerjs'

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
        let { title, icon, falg } = this.state
        return (
            <Fragment>
                <PageHeader title={title} icon={icon} />
                <div className={style.tab}>
                    <Hammer onTap={this.toMyBooks.bind(this,falg)}>
                        <p className={falg == 1 ? (style.item + " " + style.active) : style.item}>
                            我的书架
                        </p>
                    </Hammer>
                    <p className={style.line}></p>
                    <Hammer onTap={this.toBookHistory.bind(this,falg)}>
                        <p className={falg == 2 ? (style.item + " " + style.active) : style.item}>
                            阅读记录
                        </p>
                    </Hammer>
                </div>
                <Route path='/bookShelf/myBooks' exact component={MyBooks} />
                <Route path='/bookShelf/bookHistory' exact component={BookHistory} />
                <Redirect from='/bookShelf' to='/bookShelf/myBooks' />
                <PageFooter />
            </Fragment>
        )
    }
    toMyBooks(id) {
        if (id == 2) {
            this.props.history.push('/bookShelf/myBooks')
            this.setState({
                falg: 1
            })
        }

    }
    toBookHistory(id) {
        if (id == 1) {
            console.log(this.flag)
            this.props.history.push('/bookShelf/bookHistory')
            this.setState({
                falg: 2
            })
        }
    }
}
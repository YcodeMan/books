import style from './index.scss'
import React, { Component, Fragment } from 'react'

export default class CategoryUI extends Component {
    render() {
        let { data } = this.props
        data == undefined ? {} : data
        console.log(data)
        return (
            <Fragment>
                {
                    Object.keys(data).map(items =>
                        items == 'male' ?
                            < section key={items}>
                                <h4>男生</h4>
                                <nav className={style.categoryList}>
                                    {
                                        data[items].map((item, index) =>
                                            <a href="/category/玄幻?gender=male" key={index}>
                                                <span className={style.name}>{item.name}</span>
                                                <span className={style.count}>{item.bookCount}</span>
                                            </a>
                                        )
                                    }
                                </nav>
                            </section >
                            : items == 'female' ?
                                < section key={items}>
                                    <h4>女生</h4>
                                    <nav className={style.categoryList}>
                                        {
                                            data[items].map((item, index) =>
                                                <a href="/category/玄幻?gender=male" key={index}>
                                                    <span className={style.name}>{item.name}</span>
                                                    <span className={style.count}>{item.bookCount}</span>
                                                </a>
                                            )
                                        }
                                    </nav>
                                </section >
                                : items == 'picture' ?
                                    < section key={items}>
                                        <h4>漫画</h4>
                                        <nav className={style.categoryList}>
                                            {
                                                data[items].map((item, index) =>
                                                    <a href="/category/玄幻?gender=male" key={index}>
                                                        <span className={style.name}>{item.name}</span>
                                                        <span className={style.count}>{item.bookCount}</span>
                                                    </a>
                                                )
                                            }
                                        </nav>
                                    </section >
                                    : items == 'press' ?
                                        < section key={items}>
                                            <h4>出版</h4>
                                            <nav className={style.categoryList}>
                                                {
                                                    data[items].map((item, index) =>
                                                        <a href="/category/玄幻?gender=male" key={index}>
                                                            <span className={style.name}>{item.name}</span>
                                                            <span className={style.count}>{item.bookCount}</span>
                                                        </a>
                                                    )
                                                }
                                            </nav>
                                        </section >
                                        : '')
                }
            </Fragment>
        )
    }
}
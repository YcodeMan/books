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
                    Object.keys(data).map((item, value) => (
                        < section >
                            <h4>
                                {
                                    item == 'male' ? '男生' :
                                        item == 'female' ? '女生' :
                                            item == 'picture' ? '漫画' :
                                                item == 'press' ? '出版' : ''
                                }
                            </h4>
                            <nav className={style.categoryList}>
                                <a href="/category/玄幻?gender=male"
                                    data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                                    <span className={style.name}>玄幻</span>
                                    <span className={style.count}>578677</span>
                                </a>
                            </nav>
                        </section >
                    ))

                }


            </Fragment>
        )
    }
}
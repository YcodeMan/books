import React from 'react'
import style from './index.scss'
import PageHeader from '@common/pageHeader'
import PageFooter from '@common/pageFooter'
import {categoryAction} from '@action/catsAction/actionCreator'

export default class Category extends React.Component {
    constructor(){
        super();
        this.state = {
            data:{}
        }
    }
    componentWillMount(){
        categoryAction()()
    }
    render() {
        return (
            <div>
                <PageHeader />
                <section>
                    <h4>男生</h4>
                    <nav className={style.categoryList}>

                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                        <a href="/category/玄幻?gender=male"
                            data-hybrid-params="{&quot;jumpType&quot;:&quot;webview&quot;,&quot;title&quot;:&quot;玄幻&quot;,&quot;pageType&quot;:&quot;categoryDetail&quot;,&quot;code&quot;:&quot;6001 &quot;}">
                            <span className={style.name}>玄幻</span>
                            <span className={style.count}>578677</span>
                        </a>
                    </nav>
                </section>


                <PageFooter />
            </div>
        )
    }
}
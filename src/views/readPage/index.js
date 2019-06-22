import React,{ Component } from "react"
import style from './index.scss'
import Code from '@static/img/code.png'
import PageHeader from '@components/readPage/pageHeader'

export default class ReadPage extends Component{
    render(){
        return(
            <div className={style.readPage}>
                <PageHeader/>
                <div className={style.pageContent}>
                    <h3>第一章恶有恶报</h3>
                    <div className={style.contentInner}>
                    “我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、
                    </div>
                    <div className={style.code}>
                        <img src={Code}/>
                        <p>【追书神器服务号】，追书更方便，天天免费读
                            截图，去微信扫一扫，从相册选择图片关注
                            或去微信搜索【追书神器服务号】并关注</p>
                    </div>
                </div>
            </div>
        )
    }
}
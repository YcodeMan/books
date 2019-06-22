import React,{ Component } from "react"
import style from './index.scss'
import Code from '@static/img/code.png'
import PageHeader from '@components/readPage/pageHeader'
import PageFooter from '@components/readPage/pageFooter'
import {connect} from 'react-redux'
import {
    actiongetBooksContent,
    actiongetBooksList
} from '@actions/readPage/actionCreator'


class ReadPage extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className={style.readPage}>
                <PageHeader/>
                <div className={style.pageContent}>
                    <h3>第一章恶有恶报</h3>
                    <div className={style.contentInner}>
                        <p>“我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、</p>
                    <p>“我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、</p>
                    <p>“我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、</p>
                    <p>“我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、</p>
                    <p>“我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、</p>
                    <p>“我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、</p>
                    <p>“我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、</p>
                    <p>“我爸妈他们最近几天接二连三的出事，我爸磕破了头，
                    我妈切菜的时候切断了手指，我……我昨天差点儿被车给撞了，
                    而且我爸现在又……”、</p>
                    </div>
                    <div className={style.code}>
                        <img src={Code}/>
                        <p>【追书神器服务号】，追书更方便，天天免费读
                            截图，去微信扫一扫，从相册选择图片关注
                            或去微信搜索【追书神器服务号】并关注</p>
                    </div>
                </div>
                <PageFooter/>
            </div>
        )
    }
    componentDidMount(){
        // 获取小说内容
        this.props.getBooksContent()
        // 获取小说章节列表
        this.props.getBooksList()
    }
}
const mapStateToProps = (state) => ({
    // 章节
    readList: state.getIn(["readPage", "readList"]),
    // 内容
    readContent: state.getIn(["readPage", "readContent"]),
})
const   mapDispatchToProps = (dispatch) =>({
    // 获取内容
    getBooksContent(){
        dispatch(actiongetBooksContent())
    },
    // 获取章节
    getBooksList(){
        dispatch(actiongetBooksList())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ReadPage)
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PageHeader from '@common/pageHeader'
import style from './index.scss'

import { actionSubjectList } from '@actions/subjectList/actionCreator'

class SubjectList extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '主题书单',
            icon: {
                index: 'index'
            }
        }
    }
    render() {
        let { title, icon } = this.state
        let {list} = this.props
        list = list == undefined? []:list
        return (
            <Fragment>
                <PageHeader title={title} icon={icon} />
                <div className={style.navWraper}>
                    <div className={style.navItem}>
                        <ul>
                            <li>本周最热</li>
                            <li>最新发布</li>
                            <li>最多收藏</li>
                        </ul>
                    </div>
                    <div className={style.navItem}>
                        <ul>
                            <li >全部</li>
                            <li >男生</li>
                            <li >女生</li>
                            <li >玄幻</li>
                            <li >都市</li>
                            <li >总裁</li>
                        </ul>
                    <span className={style.navBtn}>筛选</span>
                    </div>
                </div>
                {
                    list.map((item, index) => (
                        item.cover = decodeURIComponent(item.getIn(["cover"])).replace('/agent/', ""),
                        <a id={item.getIn(["_id"])} className={style.booklistinfo} key={index} >
                            <img className={style.bookpic} src={item.cover} />
                            <div className={style.bookcontent}>
                                <h3>
                                    {item.getIn(['title'])}
                                </h3>
                                <p className={style.bookmsg}>{item.getIn(['author'])}</p>
                                <p className={style.bookmsg}>{item.getIn(['desc'])}</p>
                                <p className={style.bookkinds}>
                                    <span>共{item.getIn(["bookCount"])}本书 &nbsp;|&nbsp;{item.getIn(["collectorCount"])}人收藏</span>
                                </p>
                            </div>
                        </a>
                    ))
                }
            </Fragment>
        )
    }
    componentDidMount() {
        let { send } = this.props
        let params = {
            sort: 'collectorCount',
            duration: 'last-seven-days',
            start: 20
        }
        /* 
        发送请求，参数：
            sort：collectorCount 固定的
            duration：last-seven-days/all
            start：起始下标 一次20个
            gender: male/female 男女
            tag: 玄幻  标签
        */
        send(params)
    }
}

const mapStateToProps = state => ({
    list : state.getIn(['subjectList','list'])
})

const mapDispatchToProps = dispatch => ({
    send: (params) => dispatch(actionSubjectList(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(SubjectList)
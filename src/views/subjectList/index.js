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
                {/* <BookList/> */}
            </Fragment>
        )
    }
    componentDidMount() {
        let { send } = this.props
        send()
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    send: () => dispatch(actionSubjectList())
})
export default connect(mapStateToProps, mapDispatchToProps)(SubjectList)
import React from 'react'
import style from './index.scss'
import PageHeader from '@common/pageHeader'
import PageFooter from '@common/pageFooter'

export default class BookShelf extends React.Component {
    render() {
        return (
            <div className={style.bookShelf}>
                <PageHeader/>
                <div className={style.tab}>
                    <p className={style.item + " " + style.active}>我的书架</p>
                    <p className={style.line}></p>
                    <p className={style.item}>阅读记录</p>
                </div>
                <section className={style.bookTab}>
                    <div className={style.top}>
                        <span>共3本</span>
                        <span className={style.right}>
                            <span className={style.normal}>编辑</span>
                            <span className={style.edit} style={{ display: 'none' }}>
                                <span className={style.cancel}>取消</span>
                                <span className={style.delete}>删除</span>
                            </span>
                        </span>
                    </div>
                    <div className={style.bookList}>
                        <a href="/book/5bc9a910c79bb70e5802fb14/1">
                            <div className={style.inner}>
                                <div className={style.cover}>
                                    <img
                                        src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3320283%2F3320283_d475149c3a56422e9f419b450db90962.jpg%2F?imageMogr2/thumbnail/160x200" />
                                </div>
                                <div className={style.right}>
                                    <h4 className={style.name}>重生之奶爸医圣</h4>
                                    <p style={{ display: 'none' }}>更新：</p>
                                    <p>阅读到第1章</p>
                                </div>
                                <div className={style.checkbox} style={{ display: 'none' }}>
                                    <div className={style.selectImg}></div>
                                    <div className={style.selectedImg} style={{ display: 'none' }}></div>
                                </div>
                                <div className={style.toDetail}></div>
                            </div>
                        </a>
                        

                    </div>
                    <a href="/" className={style.toHome}>去书城随便逛逛</a>
                </section>

                {/* <!-- 无阅读记录时 --> */}
                <div className={style.noData}>
                    <a href="/">
                        <p>
                            暂无阅读历史，
                    <span>
                                快去逛逛找书
                    </span>
                        </p>
                    </a>
                </div>
                <PageFooter/>
            </div>
        )
    }
}
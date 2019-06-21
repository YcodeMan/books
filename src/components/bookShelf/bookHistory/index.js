import React from 'react'
import style from '@components/bookShelf/index.scss'

export default class MyBooks extends React.Component {
    render() {
        return (
            <div className={style.bookTab}>
                <i></i>
                <div className={style.bookList}>
                    <a href="/book/5bc9a910c79bb70e5802fb14/1">
                        <div className={style.inner}>
                            <div className={style.cover}>
                                <img
                                    src="http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F3320283%2F3320283_d475149c3a56422e9f419b450db90962.jpg%2F?imageMogr2/thumbnail/160x200" />
                            </div>
                            <div className={style.right}>
                                <h4 className={style.name}>重生之奶爸医圣</h4>
                                <p style={{ display: 'none' }}>最后阅读时间：</p>
                                <p>阅读到第1章</p>
                            </div>
                        </div>
                    </a>
                </div>
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
                <a href="/" className={style.toHome}>去书城随便逛逛</a>
                </div>
        )
    }
}
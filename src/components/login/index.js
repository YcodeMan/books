import React from 'react'
import style from './index.scss'

export default class LoginCon extends React.Component {
    render() {
        return (
            <div className={style.inner}>
                <div className={style.prompt}>
                    <div className={style.promptIcon}>
                    </div>
                    登陆失败，请重新登录
                    </div>
                <div className={style.title}></div>
                <div className={style.login}>
                    <div className={style.channel + " " + style.channelQQ}>
                        <a>
                            <div className={style.qq}></div>
                            <p>QQ</p>
                        </a>
                    </div>
                    <div className={style.channel + ' ' + style.channelWeibo}>
                        <a
                            href="https://api.weibo.com/oauth2/authorize?client_id=1116216234&amp;response_type=code&amp;redirect_uri=http:%2F%2Fm.zhuishushenqi.com%2Flogin%3Ftype%3DSinaWeibo%26source%3D/signin">
                            <div className={style.weibo}></div>
                            <p>微博</p>
                        </a></div>
                </div>
            </div>
        )
    }
}

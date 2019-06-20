import React from 'react'
import style from './index.scss'

export default class PageFooter extends React.Component{
    render() {
        return (
            <footer className={style.pageFooter}>
            <div className={style.search}>
                <div className={style.searchInput}>
                    <div className={style.searchIcon}></div>
                    <input type="text" name="" placeholder="总裁" id="J_searchBottomKey" />
                </div>
                <div className={style.searchBtn}>
                    <button data-touched="{&quot;isExist&quot;:true}" id="J_searchBottom">
                        搜索
                    </button>
                </div>
            </div>
            <div className={style.category}>
                <a href="/cartoon">
                    <span>漫画</span>
                </a>
                <a href="/category?pageSource=2">
                    <span>分类</span>
                </a>
                <a href="/bookList">
                    <span>书单</span>
                </a>
                <a href="/mybooks">
                    <span>书架</span>
                </a>
                <a href="/contactUs">
                    <span>联系我们</span>
                </a>
            </div>
            <div className={style.coInfo +" "+ style.copy} >
                    <a target="_blank"
                        rel="nofollow"
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006103">
                        <img src="//www.zhuishushenqi.com/images/icon/recordIcon.png" />
                        <span>沪公网安备 31011202006103号</span>
                    </a>
                </div>
                <div className={style.coInfo+" "+style.company} >上海元聚网络科技有限公司 增值电信业务经营许可证沪B2-20170022
                    网络文化经营许可证沪网文（2016）3206-227号 出版物经营许可证新出发沪批字第U7659号</div>
                <div className={style.coInfo}>客服电话：021-54393188-8048</div>
                <div className={style.coInfo}>举报电话：021-54700287</div>
        </footer>
        )
    }
}
import React, { Component, Fragment } from 'react'
import styled from './index.scss'
import {connect} from 'react-redux'
const bookIntorduction = (props) => {
    console.log(this, props )
    let introduction = props ?  '' : ''
    return (
        <Fragment>
            <div className='introduction'>
                <p>凌天成给了燕唯爱情的甜美幻象，让她以为自己终于有了属于自己的幸福的家。
                    新婚之夜，他残忍的揭开真相，娶她，只是为了报丧母之仇！
                    一次次的折磨和践踏，让燕唯的心慢慢冷却。
                    当唯一支撑她的孩子从体内滑落，痛到了极致，无声的哭泣竟变成声声泣血的痛苦哀嚎！
                    漫无边际的悔恨也将凌天成淹没，在母亲自杀的许多年后，
                    他再次深深体会到，什么叫做痛彻心扉，钻心蚀骨！
            </p>
                <span className={styled.arrow}>v</span>
            </div>
            <div>
                <a>
                    <div className="catalogue">
                        <span>目录</span>
                        <b>[完结]  第四十八章 无责任小剧场：B计划<i>&gt;</i></b>
                    </div>
                </a>
            </div>
        </Fragment>

    )
}

const mapStateToProps = (state) => ({
    bookDetail: state.getIn(['bookDetails', 'bookDetail'])
})
   


const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(bookIntorduction)
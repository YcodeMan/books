import React from 'react'
import style from '@components/bookShelf/index.scss'
import Hammer from 'react-hammerjs'
import {connect} from 'react-redux'

import {actionGetBookDetail} from '@actions/bookDetails/actionCreator'

class MyBooks extends React.Component {
    render() {
        let {mybooks,toDetail} = this.props;
        return (
            <div className={style.bookTab}>
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
                {
                    mybooks.map(item => 
                        <a href="/book/5bc9a910c79bb70e5802fb14/1" key={item._id}>
                    <div className={style.inner}>
                        <div className={style.cover}>
                            <img src={item.Img} />
                        </div>
                        <div className={style.right}>
                            <h4 className={style.name}>{item.title}</h4>
                            <p style={{ display: 'none' }}>更新：</p>
                            <p>阅读到第<span>1</span>章</p>
                        </div>
                        <div className={style.checkbox} style={{ display: 'none' }}>
                            <div className={style.selectImg}></div>
                            <div className={style.selectedImg} style={{ display: 'none' }}></div>
                        </div>
                        <Hammer onTap={toDetail.bind(this,item._id)}>
                        <div className={style.toDetail}></div>
                        </Hammer>
                    </div>
                </a>
                    )
                }
            </div>
            <a href="/" className={style.toHome}>去书城随便逛逛</a>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mybooks : JSON.parse(window.localStorage.getItem('mybooks'))
})

const mapDispatchToProps = dispatch => ({
    toDetail(id) {
        dispatch(actionGetBookDetail())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)
import React from 'react'
import style from '@components/bookShelf/index.scss'
import Hammer from 'react-hammerjs'
import {connect} from 'react-redux'

class MyBooks extends React.Component {
    render() {
        let {mybooks} = this.props;
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
                        <a href="javascript:void(0);" key={item._id}>
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
                        <Hammer onTap={this.toDetail.bind(this,item._id)}>
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
    toDetail(id) {
        window.sessionStorage.setItem('id',id)
        this.props.history.push({pathname:'/bookDetail',params:{id}})
    }
}

const mapStateToProps = state => ({
    mybooks : JSON.parse(window.localStorage.getItem('mybooks'))
})

export default connect(mapStateToProps, null)(MyBooks)
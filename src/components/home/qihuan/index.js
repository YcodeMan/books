import React, { Component } from 'react';
import "./index.scss"
import {connect} from 'react-redux'
import BookContentCommon from '@common/bookList'
import {actiongetQhuanBooks} from '@actions/home/actionCreator'

class QiHuan extends Component{
    constructor(){
        super()
    }
    render(){
        let {qhuanbooks} = this.props
        let indexQhuan = qhuanbooks.slice(0,1)
        // console.log(qhuanbooks,"89")
        let newQhuan = qhuanbooks.slice(1,4)
        return(
            <div className="boyfinishbooks">
                <div className="title">
                    <h3>奇幻</h3>
                </div>
                <div className="kindslist">
                    <a href="#">都市</a>
                    <a href="#">仙侠</a>
                    <a href="#">玄幻</a>
                    <a href="#">科幻</a>
                </div>
                <BookContentCommon val={indexQhuan}/>
                {
                    newQhuan.map((item,index)=>(
                        <div className="sublist" key={index}>
                            <h4>
                                <i>{item.getIn(["majorCate"])}</i>
                                <span>{item.getIn(["title"])}</span>
                                <b>{item.getIn(["author"])}</b>
                            </h4>
                            <p>{item.getIn(["shortIntro"])}
                            </p>
                        </div>
                    ))
                }
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getAllQhuanBooks()
    }
}

const mapStateToProps = (state) => ({
    qhuanbooks: state.getIn(["home","qhuanbooks"])
})

const mapDispatchToProps = (dispatch) => ({
    getAllQhuanBooks(){
        dispatch(actiongetQhuanBooks())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(QiHuan)
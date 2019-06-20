import React, { Component } from 'react';
import "./index.scss"
import {connect} from 'react-redux'
import BookContentCommon from '@common/bookList'
import {actiongetXxiaBooks} from '@actions/home/actionCreator'




class XianXia extends Component{
    constructor(){
        super()
    }
    render(){
        let {xxianbooks} = this.props
        let newXxian = xxianbooks.slice(0,3)
        // console.log(xxianbooks,543)
        return(
            <div className="boygodbooks">
                <div className="title">
                    <h3>修真仙侠</h3>
                </div>
                <BookContentCommon val={newXxian}/>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getAllXxianBooks()
    }
}
const mapStateToProps = (state) => ({
    xxianbooks: state.getIn(["home","xxianbooks"])
})
const mapDispatchToProps = (dispatch) => ({
    getAllXxianBooks(){
        dispatch(actiongetXxiaBooks())
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(XianXia)
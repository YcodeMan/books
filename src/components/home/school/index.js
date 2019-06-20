import React, { Component } from 'react';
import "./index.scss"
import {connect} from 'react-redux'
import BookContentCommon from '@common/bookList'
import {actiongetSchoolBooks} from '@actions/home/actionCreator'

class School extends Component{
    constructor(){
        super()
    }
    render(){
        let {schoolbooks} = this.props
        return(
            <div className="boyhotbooks">
                <div className="title">
                    <h3>青春校园</h3>
                </div>
                <BookContentCommon val={schoolbooks}/>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getAllSchoolBooks()
    }
}
const mapStateToProps = (state) => ({
    schoolbooks: state.getIn(["home","schoolbooks"])
})

const mapDispacthToProps = (dispatch) => ({
    getAllSchoolBooks(){
        dispatch(actiongetSchoolBooks())
    }
})


export default connect(mapStateToProps,mapDispacthToProps)(School)
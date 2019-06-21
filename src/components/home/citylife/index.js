import React, { Component } from 'react';
import {connect} from 'react-redux'
import "./index.scss"
// import BookList from "../../../common/bookList"
import BookContentCommon from '@common/bookList'
import {actiongetAllBooks} from '@actions/home/actionCreator'

class CityLife extends Component{
    constructor(){
        super()
    }
    render(){
        let {citybooks} = this.props
        return(
            <div className="shortbooks">
                <div className="title">
                    <h3>都市生活</h3>
                </div>
                <BookContentCommon val={citybooks}/>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getAllHomeBooks()
    }
}
const mapStateToProps = (state) => ({
    citybooks: state.getIn(['home', 'citybooks'])
})
const mapDispatchToProps = (dispatch) => ({
    getAllHomeBooks() {
        dispatch(actiongetAllBooks())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(CityLife)
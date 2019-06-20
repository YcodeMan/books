import React, { Component } from 'react';
import "./index.scss"
import {connect} from 'react-redux'
import BookContentCommon from '@common/bookList'
import {actiongetGfinishingBooks} from '@actions/home/actionCreator'

class WuXia extends Component{
    constructor(){
        super()
    }
    render(){
        let {gfinishbooks} = this.props
        console.log(this.props,"asfddsafas")
        let indexGbooks = gfinishbooks.slice(0,3)
        return(
            <div className="girlredbooks">
                <div className="title">
                    <h3>武侠</h3>
                </div>
                <BookContentCommon val={indexGbooks}/>
                <div className="loadmore">
                    <a href="#">查看更多></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getOverGirlBooks()
    }
}
const mapStateToProps = (state) => ({
    gfinishbooks: state.getIn(["home","gfinishbooks"])
})

const mapDispatchToProps =(dispatch) => ({
    getOverGirlBooks(){
        
        dispatch(actiongetGfinishingBooks())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(WuXia)
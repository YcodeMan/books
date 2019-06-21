import React, { Component } from 'react';
import "./index.scss"
import {connect} from 'react-redux'
import BookContentCommon from '@common/bookList'
import {actiongetGhotBooks} from '@actions/home/actionCreator'

class GirHotBooks extends Component{
    constructor(){
        super()
    }
    render(){
        let {girlbooks} = this.props
        let indexGbooks =  girlbooks.slice(0,1)
        let newGbooks = girlbooks.slice(1,4)
        return(
            <div className="girlnicebooks">
                <div className="title">
                    <h3>女生热门</h3>
                </div>
                <div className="kindslist">
                    <a href="#">现代</a>
                    <a href="#">女尊</a>
                    <a href="#">古言</a>
                    <a href="#">校园</a>
                </div>
                <BookContentCommon val={indexGbooks}/>
                {
                    newGbooks.map((item,index)=>(
                    <div className="sublist" key={index} id={item.getIn(["_id"])}>
                        <h4>
                            <i>{item.getIn(["majorCate"])}</i>
                            <span>{item.getIn(["title"])}</span>
                            <b>{item.getIn(["author"])}</b>
                        </h4>
                        <p>{item.getIn(["shortIntro"])}</p>
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
        this.props.getAllGirlHotBooks()
    }
}
const mapStateToProps = (state) => ({
    girlbooks: state.getIn(["home","girlbooks"])
})
const mapDispacthToProps = (dispatch) => ({
    getAllGirlHotBooks(){
        dispatch(actiongetGhotBooks())
    }
})

export default connect(mapStateToProps,mapDispacthToProps)(GirHotBooks)
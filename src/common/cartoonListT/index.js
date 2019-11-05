import React,{Component,Fragment} from 'react'
import "./index.scss"

const CarToonListT = (Books) => 
class extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Books Tbooklist={this.props.val}/>
        )
    }
}

class NewCartoonBooks extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {Tbooklist} = this.props
        Tbooklist = Tbooklist=== undefined? []:Tbooklist
        let shortBookList = Tbooklist.slice(0,6)
        return(
            <Fragment>
                <div className="cartoonListT">
                    <div className="contenList">
                        {
                            shortBookList.map((item,index)=>(
                                item.cover = decodeURIComponent(item.getIn(["cover"])).replace('/agent/', ""),
                                <a href={item.getIn(["_id"])} key={index}>
                                    <img src={item.cover}/>
                                    <div className="cartoonInfo">
                                        <h4>{item.getIn(["title"])}</h4>
                                        <p>{item.getIn(["shortIntro"])}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default CarToonListT(NewCartoonBooks)
import React,{Component,Fragment} from 'react'
import "./index.scss"

const CarToonList = (List) => 

class extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <List booklist={this.props.val}/>
        )
    }
    
}

class CarToonBookList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {booklist} = this.props
        booklist = booklist=== undefined? []:booklist
        let newbooklist = booklist.slice(0,4)
    
        return(
            <Fragment>
                <div className="cartoonList">
                    <div className="contenList">
                        {
                            newbooklist.map((item,index)=>(
                                item.cover = decodeURIComponent(item.getIn(["cover"])).replace('/agent/', ""),
                                <a href={item.getIn(["_id"])} key={index}>
                                    <img src={item.cover}/>
                                    <div>
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

export default CarToonList(CarToonBookList)
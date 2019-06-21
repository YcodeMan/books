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
        return(
            <Fragment>
                <div className="cartoonList">
                    <div className="contenList">
                        <a href="#">
                            <img src="~@static/img/list02.png"/>
                            <div>
                                <h4>唐寅在异界</h4>
                                <p>杀手穿越到异世界</p>
                            </div>
                        </a>
                        <a href="#">
                            <img src="@static/img/list02.png"/>
                            <div>
                                <h4>唐寅在异界</h4>
                                <p>杀手穿越到异世界</p>
                            </div>
                        </a>
                        <a href="#">
                            <img src="@static/img/list02.png"/>
                            <div>
                                <h4>唐寅在异界</h4>
                                <p>杀手穿越到异世界</p>
                            </div>
                        </a>
                        <a href="#">
                            <img src="@static/img/list02.png"/>
                            <div>
                                <h4>唐寅在异界</h4>
                                <p>杀手穿越到异世界</p>
                            </div>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CarToonList(CarToonBookList)
import React,{Component} from 'react'
import "./index.scss"

export default class CarToonList extends Component{


    render(){
        return(
            <div className="cartoonList">
               
                <div className="contenList">
                    <a href="#">
                        <img src="../../../public/images/list02.png"/>
                        <div>
                            <h4>唐寅在异界</h4>
                            <p>杀手穿越到异世界</p>
                        </div>
                    </a>
                    <a href="#">
                        <img src="../../../public/images/list02.png"/>
                        <div>
                            <h4>唐寅在异界</h4>
                            <p>杀手穿越到异世界</p>
                        </div>
                    </a>
                    <a href="#">
                        <img src="../../../public/images/list02.png"/>
                        <div>
                            <h4>唐寅在异界</h4>
                            <p>杀手穿越到异世界</p>
                        </div>
                    </a>
                    <a href="#">
                        <img src="../../../public/images/list02.png"/>
                        <div>
                            <h4>唐寅在异界</h4>
                            <p>杀手穿越到异世界</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
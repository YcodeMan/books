import React,{Component} from 'react'
import "./index.scss"

export default class CarToonList extends Component{


    render(){
        return(
            <div className="cartoonListT">
                <div className="contenList">
                    <a href="#">
                        <img src="../../../public/images/list01.png"/>
                        <div class="cartoonInfo">
                            <h4>唐寅在异界</h4>
                            <p>杀手穿越到异世界</p>
                        </div>
                    </a>
                    <a href="#">
                        <img src="../../../public/images/list01.png"/>
                        <div class="cartoonInfo">
                            <h4>唐寅在异界</h4>
                            <p>杀手穿越到异世界</p>
                        </div>
                    </a>
                    <a href="#">
                        <img src="../../../public/images/list01.png"/>
                        <div class="cartoonInfo">
                            <h4>唐寅在异界</h4>
                            <p>杀手穿越到异世界</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
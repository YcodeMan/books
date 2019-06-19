import React,{Component} from 'react'
import Home from "./views/home"
import CarToon from "./views/cartoon"
import "../public/css/reset.css"
import "../public/js/flexble.js"

export default class App extends Component{
    render() {
        return(
            <div>
                <CarToon/>
            </div>
        )
    }
}
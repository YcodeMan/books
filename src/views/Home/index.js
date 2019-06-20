import React,{Component} from 'react'

import IndexHeader from "../../common/indexheader"
import ShortBook from "../../components/shortBook"
import GirlRedBooks from "../../components/girlredbooks"
import BoyHotBooks from "../../components/boyhotbooks"
import BoyGodBooks from "../../components/boygodbooks"
import GirlNiceBooks from "../../components/girlnicebooks"
import BoyFinishBooks from "../../components/boyfinishbooks"
import MySwiper from "../../common/swiper"
import Nav from "../../components/nav"

 

export default class Home extends Component{
    render() {
        return(
            <div>
                <IndexHeader/>
                <MySwiper/>
                <Nav/>
                <ShortBook/>
                <GirlNiceBooks/>
                <GirlRedBooks/>
                <BoyHotBooks/>
                <BoyFinishBooks/>
                <BoyGodBooks/>
            </div>
        )
    }
}
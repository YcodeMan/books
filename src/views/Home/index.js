import React,{Component} from 'react'

import IndexHeader from "@common/indexheader"
import MySwiper from "@common/swiper"
import Nav from "@components/home/nav"

import CityLife from "@components/home/citylife"
import GirHBooks from "@components/home/ghotbooks"
import WuXia from "@components/home/wuxia"
import School from "@components/home/school"
import QiHuan from "@components/home/qihuan"
import XianXia from "@components/home/xianxia"
import PageFooter from "@common/pageFooter"
// import {Spin} from "antd"
// import 'antd/dist/antd.min.css'

export default class Home extends Component{
    render() {
        return(
            <div className="home">
                {/* <Spin size="large"/> */}
                <IndexHeader/>
                <MySwiper/>
                <Nav/>
                <CityLife/>
                <QiHuan/>
                <WuXia/>
                <School/>
                <GirHBooks/>
                <XianXia/>
                <PageFooter/>
            </div>
        )
    }
}
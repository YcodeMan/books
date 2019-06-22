import React,{Component} from 'react'
import {HashRouter as Router, Route, Redirect,Switch} from 'react-router-dom'
import AsyncComponent from '@common/asyncComponent'
import Home from '@views/home'

// 实现路由按需加载
const bookComment = AsyncComponent(() => import('@views/bookComment'))
const BookDetails  = AsyncComponent(() => import('@views/BookDetails'))
const Cartoon  = AsyncComponent(() => import('@views/cartoon'))
const Category = AsyncComponent(() => import('@views/category'))
const BookShelf = AsyncComponent(() => import('@views/bookShelf'))
const Login = AsyncComponent(() => import('@views/login'))
const ReadPage = AsyncComponent(() => import('@views/readPage'))

export default class RouterConfig extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path='/home' exact component={Home} />
                    <Route path='/' exact component={Category} />
                    <Route path='/bookDetail' exact component={BookDetails} />
                    <Route path='/bookDetail/comment' exact component={bookComment} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/mybooks' exact component={BookShelf} />
                    <Route path='/bookHistory' exact component={BookShelf} />
                    <Route path='/category' exact component={Category} />
                    <Route path='/cartoon' exact component={Cartoon} />
                    <Route path='/readPage' exact component={ReadPage} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}
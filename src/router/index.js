import React,{Component} from 'react'
import {HashRouter as Router, Route, Redirect,Switch} from 'react-router-dom'
import AsyncComponent from '@common/asyncComponent'
import Home from '@views/home'
import Login from '@views/login'
import BookShelf from '@views/bookShelf';



const BookDetails  = AsyncComponent(() => import('@views/BookDetails'))
const Cartoon  = AsyncComponent(() => import('@views/cartoon'))
const Category = AsyncComponent(() => import('@views/category'))

export default class RouterConfig extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path='/home' exact component={Home} />
                    <Route path='/' exact component={Category} />
                    <Route path='/bookDetail' exact component={BookDetails} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/mybooks' exact component={BookShelf} />
                    <Route path='/bookHistory' exact component={BookShelf} />
                    <Route path='/category' exact component={Category} />
                    <Route path='/cartoon' exact component={Cartoon} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}
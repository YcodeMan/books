import React,{Component} from 'react'
import {HashRouter as Router, Route, Redirect,Switch} from 'react-router-dom'
import AsyncComponent from '@common/asyncComponent'
import Home from '@views/Home'
import Login from '@views/login'
import BookShelf from '@views/bookShelf';
import Category from '@views/category';


const BookDetails  = AsyncComponent(() => import('@views/BookDetails'))


export default class RouterConfig extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path='/' exact component={BookDetails} />
                    <Route path='/home' exact component={Home} />
                    <Route path='/bookDetails' exact component={BookDetails} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/mybooks' exact component={BookShelf} />
                    <Route path='/bookHistory' exact component={BookShelf} />
                    <Route path='/category' exact component={Category} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}
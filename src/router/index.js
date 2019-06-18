import React,{Component} from 'react'
import {HashRouter as Router, Route, Redirect,Switch} from 'react-router-dom'
import AsyncComponent from '@common/asyncComponent'
import Home from '@views/Home'


const BookDetails  = AsyncComponent(() => import('@views/BookDetails'))


export default class RouterConfig extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path='/' exact component={BookDetails} />
                    <Route path='/home' exact component={Home} />
                    <Route path='/bookDetails' exact component={BookDetails} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}
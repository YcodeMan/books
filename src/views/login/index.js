import React from 'react'
// import style from './index.scss'
import PageHeader from '@common/pageHeader'
import PageFooter from '@common/pageFooter'
import LoginCon from '@components/login'

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <PageHeader title="登录" icon={{index:'index'}}/>
                <LoginCon/>
                <PageFooter/>
            </div>
        )
    }
}
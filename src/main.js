import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@router'
import App from './app'
import store from '@store'
import {Provider} from 'react-redux'
import '@public/css/reset.css'
import '@public/js/flexble'

import { AppContainer } from 'react-hot-loader';

const render= Component => {
    ReactDOM.render(
        <Provider store={store}>
             <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>
       
       ,
        document.getElementById('app'),
        () => { console.log('挂载成功') }
        
    )
}

render(Router)

if (module.hot) {
    module.hot.accept('./router/', () => {
      render(Router);
    })
  }
  


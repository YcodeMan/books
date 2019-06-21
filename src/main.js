import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@router'
import "@static/css/reset.css"
import "@static/js/flexble.js"
import store from '@store'
import {Provider} from 'react-redux'

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
  
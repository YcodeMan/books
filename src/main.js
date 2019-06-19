import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@router'
import App from './app'

<<<<<<< HEAD
import { AppContainer } from 'react-hot-loader';

const render= Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>
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
  
=======
ReactDOM.render(
    <App/>,
    document.getElementById('app'),
    () => { console.log('挂载成功') }
    
)
>>>>>>> wea

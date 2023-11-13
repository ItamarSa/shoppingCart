import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './RootCmp.jsx'
import { store } from './store/store.js'

import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RootCmp />
  </Provider>
)

serviceWorkerRegistration.register()


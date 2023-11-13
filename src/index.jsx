import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootCmp } from './RootCmp.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

// import { store } from './store/store.js'
// import { Provider } from 'react-redux'


import './assets/styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
    <Router>
      <RootCmp />
    </Router>
  // </Provider>
)



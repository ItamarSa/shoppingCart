import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { UserMsg } from './cmps/UserMsg'
import { ProductIndex } from './cmps/ProductIndex'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppHeader } from './cmps/AppHeader'
import { CartProducts } from './cmps/CartProducts'



export function RootCmp() {


    return (
        <Provider store={store}>
            <div className="container">
                <AppHeader/>
                <UserMsg />
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    <Route path='/' element={<ProductIndex />} />
                    <Route element={<ProductIndex />} path='/products' />
                    <Route path="/cart" element={<CartProducts />} />  // Add this route for the CartProducts component

                </Routes>
            </div>
        </Provider>
    )
}
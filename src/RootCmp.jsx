import React from 'react'
import { Routes, Route } from 'react-router'



export function RootCmp() {


    return (
        <div className="main-container">
            <UserMsg />
            <Routes>
                {/* <Route path='/' element={<HomePage />} /> */}

            </Routes>

        </div>

    )
}
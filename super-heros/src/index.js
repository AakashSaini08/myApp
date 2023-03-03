import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import rootReducer from './Services/Reducers/index'

const store =configureStore({
    reducer:rootReducer
})
// console.log("store data", store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store ={store}>
        <App />
    </Provider>


)

//Library React JS
import React from 'react'
import { BrowserRouter, Route } from  'react-router-dom'


//pages
import Home from './pages/Home'
import Config from './pages/PageConfig'
import RegisterValue from './pages/RegisterValues'


const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact/>
            <Route path="/config" component={Config} />
            <Route path="/register-value" component={RegisterValue} />
        </BrowserRouter>
    )
}

export default Routes
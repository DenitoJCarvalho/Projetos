//Library React JS
import React from 'react'
import { BrowserRouter, Route } from  'react-router-dom'


//pages
import Home from './pages/Home'
import Config from './pages/Config'


const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact/>
            <Route path="/config" component={Config} />
        </BrowserRouter>
    )
}

export default Routes
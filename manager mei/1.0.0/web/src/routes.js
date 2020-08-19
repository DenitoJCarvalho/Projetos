//Library React JS
import React from 'react'
import { BrowserRouter, Route } from  'react-router-dom'


//pages
import Home from './pages/Home'
import MainBox from './pages/MainBox'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact/>
            <Route path="/MainBox" component={MainBox} />
        </BrowserRouter>
    )
}

export default Routes
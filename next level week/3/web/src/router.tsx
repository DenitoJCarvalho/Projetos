import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'


const Router = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" component={Landing} exact />
                <Route path="/app" component={OrphanagesMap} />
            </switch>
        </BrowserRouter>
    )
}

export default Router
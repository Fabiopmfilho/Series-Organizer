import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/home/Home'
import SerieCrud from './pages/series/SerieCrud'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/series' component={SerieCrud} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes


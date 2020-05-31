<<<<<<< HEAD
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'

const App = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
)

=======
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import NotFound from './containers/NotFound'
import Layout from './components/Layout'

const App = ()=>(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)

>>>>>>> redux-router
export default App
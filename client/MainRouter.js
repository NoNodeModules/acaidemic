import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from './core/Landing'
/*import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin' 
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu' */


const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
          <Route exact path="/" component = {Landing}/>

      </Switch>
    </div>)
}

export default MainRouter
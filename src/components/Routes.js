import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Home      from './Home'
import Skills     from './Skills'
import Education  from './Education'
import Experience from './Experience'


export default class Routes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/"                   component={Home} />
        <Route exact path="/skills"             component={Skills} />
        <Route exact path="/education"          component={Education} />
        <Route exact path="/experience"         component={Experience} />
      </Switch>
    )
  }
}

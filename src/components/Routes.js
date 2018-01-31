import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import About      from './About'
import Skills     from './Skills'
import Education  from './Education'
import Experience from './Experience'
import Examples   from './Examples'


export default class Routes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/"                   component={About} />
        <Route exact path="/skills"             component={Skills} />
        <Route exact path="/education"          component={Education} />
        <Route exact path="/experience"         component={Experience} />
        <Route exact path="/examples"             component={Examples} />
      </Switch>
    )
  }
}

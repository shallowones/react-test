import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { StoredComponent } from 'containers'


class App extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" component={() => <StoredComponent value="Hello!" />} exact />
        <Route component={() => <div><h2>Not found!</h2></div>} />
      </Switch>
    )
  }
}

export default App

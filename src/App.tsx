import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Page } from './components/base/base'
import { GlobalStyle } from './global/GlobalStyle'

import { Play } from './pages/Play'
import { Rules } from './pages/Rules'
import { Home } from './pages/Home'

export function App() {
  return (
    <Page>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/rules" component={Rules} />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </Page>
  )
}

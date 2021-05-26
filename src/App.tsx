import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Page } from './components/base/base'
import { TopBar } from './components/TopBar'
import { GlobalStyle } from './global/GlobalStyle'


import { Play } from './pages/Play'
import { Rules } from './pages/Rules'
import { Home } from './pages/Home'
// import { Balance } from './pages/Balance'
// import { Transactions } from './pages/Transactions'
// import { SendEtherPage } from './pages/SendEtherPage'
// import { Block } from './pages/Block'
// import { Tokens } from './pages/Tokens'

export function App() {
  return (
    <Page>
      <GlobalStyle />
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/rules" component={Rules} />
          {/* <Route exact path="/tokens" component={Tokens} /> */}
          {/* <Route exact path="/send" component={SendEtherPage} />
          <Route exact path="/transactions" component={Transactions} /> */}
          <Redirect exact from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </Page>
  )
}

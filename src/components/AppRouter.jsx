import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { privateRoutes, publicRoutes } from '../router'

export default function AppRouter() {
  const isAuth = false
  return (
    isAuth ? <Switch>
      {privateRoutes.map(route =>
        <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
      )}
      <Redirect to={'/posts'} />
    </Switch> :
      <Switch>
        {publicRoutes.map(route =>
          <Route path={route.path} component={route.component} exact={route.exact} />
        )}
        <Redirect to={'/login'} />
      </Switch>

  )
}

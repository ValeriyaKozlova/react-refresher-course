import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { AuthContext } from '../context'
import { privateRoutes, publicRoutes } from '../router'
import Loader from './UI/loader/Loader'

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }
  return (
    isAuth ? <Switch>
      {privateRoutes.map(route =>
        <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
      )}
      <Redirect to={'/posts'} />
    </Switch> :
      <Switch>
        {publicRoutes.map(route =>
          <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
        )}
        <Redirect to={'/login'} />
      </Switch>

  )
}

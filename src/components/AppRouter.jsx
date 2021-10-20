import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import About from '../pages/About'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route path="/posts/:id">
        <PostIdPage />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to={'/error'} />
    </Switch>
  )
}
import React from 'react';
import './App.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
     
  )
}

export default App;

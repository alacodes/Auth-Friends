import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/friends">Friends</Link>
        </nav>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/friends" component={Friends} />
      </div>
    </Router>
  )
}

export default App;
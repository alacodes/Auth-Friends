import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import AddFriend from './components/AddFriend'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/newFriend">Add a friend</Link>
        </nav>
        <Route exact path="/login" render={(props) => (
          <Login
            {...props}
          />
        )}/>
        <PrivateRoute exact path="/friends" component={Friends} />
        <PrivateRoute exact path="/newfriend" component={AddFriend} />
      </div>
    </Router>
  )
}

export default App;
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import AddFriend from './components/AddFriend'
import EditFriend from './components/Edit'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login" className="nav-link">Log In</Link>
          <Link to="/friends" className="nav-link">Friends</Link>
          <Link to="/newFriend" className="nav-link">Add a friend</Link>
        </nav>
        <Route exact path="/login" render={(props) => (
          <Login
            {...props}
          />
        )}/>
        <PrivateRoute exact path="/friends" component={Friends} />
        <PrivateRoute exact path="/newfriend" component={AddFriend} />
        <PrivateRoute path="/edit/:id" component={EditFriend}/>
      </div>
    </Router>
  )
}

export default App;
import React, { useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Users from '../Users/Users.component';
import Register from '../Register/Register.component';

import { UsersContext, defaultState } from '../../store/context';
import { reducer } from '../../store/reducer';


import './App.css';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  useEffect(() => {
    console.log('State Updated @', new Date().getTime(), state);
  }, [state]);

  return (
    <div className="App">
      <UsersContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Router>
          <header>React without Redux</header>
          <button><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></button>
          <button><Link to="/users" style={{ textDecoration: 'none' }}>Load Users</Link></button>
          <hr />
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </Router>
      </UsersContext.Provider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';
import { EditTodo } from './EditTodo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar bg-light navbar-extend-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
                <Link to="/create" className="nav-link">CreateTodo</Link>
            </li>
          </ul>
        </nav>
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

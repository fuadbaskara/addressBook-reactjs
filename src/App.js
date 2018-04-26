import React, { Component } from "react";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addressbook">Address Book</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/addressbook" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;

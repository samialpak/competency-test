import './App.css';
import Success from './components/success';
import User from './components/user';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/user" component={User} />
            <Route path="/success" component={Success} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

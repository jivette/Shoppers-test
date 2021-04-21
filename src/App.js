import logo from './logo.svg';
import './sass/App.sass';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './Views/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nomatch from './components/Nomatch/Nomatch';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/explore/:idTeam">
            <TeamDetails/>
          </Route>
          <Route path="*">
            <Nomatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//Components
import Login from './components/Login'

const Routes: React.FC = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Login}/>
        </Switch>
    </Router>
  );
}

export default Routes;
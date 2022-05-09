import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Dashboard from './views/Users/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <Switch>
      <Route path='/login'>
        <Auth />
      </Route>
      <PrivateRoute path='/dashboard'>
        <Dashboard />
      </PrivateRoute>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

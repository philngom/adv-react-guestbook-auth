import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Dashboard from './views/Users/Dashboard';

export default function App() {
  return (
    <Switch>
      <Route to='/login'>
        <Auth />
      </Route>
      <PrivateRoute to='/dashboard'>
        <Dashboard />
      </PrivateRoute>
      <Route to='/'>
        <Home />
      </Route>
    </Switch>
  );
}

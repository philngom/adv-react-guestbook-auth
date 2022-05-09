import { Switch } from 'react-router-dom';

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

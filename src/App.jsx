import { Switch } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route to='/login'>
        <Auth />
      </Route>
      <PrivateRoute to='/entries'>
        <Entries />
      </PrivateRoute>
      <Route to='/'>
        <Home />
      </Route>
    </Switch>
  );
}

import { Route, Redirect, useLocation } from 'react-router-dom';

export default function PrivateRoute() {
  const { user } = useUser();
  const location = useLocation();

  return (
    <Route {...rest}>
      {user.email ? (
        children
      ) : (
        <Redirect
        to={{
          pathname: '/login',
          state: { origin: location }
        }}
        />
      )}

    </Route>
  )
}
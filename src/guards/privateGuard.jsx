import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthSelec } from 'reduxstore/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(isAuthSelec);

  const location = useLocation();

  return isAuth ? children : <Navigate to={'/login'} state={location} />;
};
export default PrivateRoute;

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthSelec } from 'reduxstore/auth/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(isAuthSelec);
  const location = useLocation();

  const prev = location.state ? location.state.pathname : '/';

  return !isAuth ? children : <Navigate to={prev} />;
};
export default PublicRoute;

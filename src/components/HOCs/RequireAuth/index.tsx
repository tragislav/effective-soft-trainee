import { useLocation, Navigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

interface RequireAuthProps {
  children: JSX.Element;
}

function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;

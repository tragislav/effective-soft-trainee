import { useContext } from 'react';
import { AuthContext } from 'components/HOCs/AuthProvider';

// eslint-disable-next-line import/prefer-default-export
export function useAuth() {
  return useContext(AuthContext);
}

import { createContext, ReactNode, useMemo, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthValue {
  token: string | null;
  signIn: (newToken: string | null) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthValue>({
  token: '',
  signIn: () => {},
  signOut: () => {},
});

function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);

  const signIn = (newToken: string | null) => {
    setToken(newToken);
  };
  const signOut = () => {
    setToken(null);
  };

  const value: AuthValue = useMemo(() => ({ token, signIn, signOut }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

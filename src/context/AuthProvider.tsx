import { createContext, JSX, useContext, useState } from 'react';

type TSigninProps = (user: string, callback: () => void) => void;
type TAuthContext = {
  user: string | null;
  signin: TSigninProps;
  signout: () => void;
};

const AuthContext = createContext<TAuthContext | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(() => localStorage.getItem('user') || null);

  const signin: TSigninProps = (newUser, callback) => {
    setUser(newUser);
    localStorage.setItem('user', newUser);
    callback();
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

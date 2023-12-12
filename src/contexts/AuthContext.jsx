import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  function handleLogin(payload) {
    setIsLoggedIn(true);
    setUser(payload.user);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUser({});
  }

  const values = {
    isLoggedIn,
    user,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

import { useContext, createContext, useState } from 'react';
import { getUser, signIn, signUp } from '../services/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });

  const login = async(email, password) => {
    const authenticatedUser = await signIn({ email, password });

    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  }

  const logout = () => {
    setUser({ email: null });
  }

  return (
  <UserContext.Provider value={{ user, login, logout }}>
    {children}
  </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
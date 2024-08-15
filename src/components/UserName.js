import React, { createContext, useState, useContext } from 'react';

const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <UserNameContext.Provider value={{ name, setName }}>
      {children}
    </UserNameContext.Provider>
  );
};

export const useUserName = () => useContext(UserNameContext);

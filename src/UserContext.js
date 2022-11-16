import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);

  return (
    <UserContext.Provider value={{ usuario: 'Matheus' }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;

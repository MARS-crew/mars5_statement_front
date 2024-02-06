import {func} from 'prop-types';
import React, {createContext, useContext, useState} from 'react';

const Context = createContext({});

export function AuthProvider({children}) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Context.Provider value={{isLogin, setIsLogin}}>
      {children}
    </Context.Provider>
  );
}

export function useLogin() {
  return useContext(Context);
}

import {func} from 'prop-types';
import React, {createContext, useContext, useState} from 'react';

const Context = createContext({});

export function WriteProvider({children}) {
  const [write, setWrite] = useState(false);

  return (
    <Context.Provider value={{write, setWrite}}>{children}</Context.Provider>
  );
}

export function useWrite() {
  return useContext(Context);
}

import React, {createContext, useContext, useState} from 'react';

const TextContext = createContext();

export function TextTypeProvider({children}) {
  const [textType, setTextType] = useState('Share');

  const changeTextType = () => {
    setTextType(currentStatus =>
      currentStatus === 'Share' ? 'Send' : 'Share',
    );
  };

  return (
    <TextContext.Provider value={{textType, changeTextType}}>
      {children}
    </TextContext.Provider>
  );
}

export function useTextType() {
  const context = useContext(TextContext);
  if (context === undefined) {
    throw new Error('useTextType must be used within a TextTypeProvider');
  }
  return context;
}

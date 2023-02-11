import React, { useState } from 'react';

export const ModeContext = React.createContext();

export const ModeProvider = ({ children }) => {
  const [activeMode, setActiveMode] = useState('dark');

  const toggleMode = () => {
    setActiveMode(activeMode === 'dark' ? 'light' : 'dark');
  };

  return <ModeContext.Provider value={{ activeMode, toggleMode }}>{children}</ModeContext.Provider>;
};

export default ModeProvider;

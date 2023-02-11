import React, { useState } from 'react';

export const ModeContext = React.createContext();

export const ModeProvider = ({ children }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(true);

  const toggleMode = () => {
    setIsDarkModeActive(isDarkModeActive === true ? false : true);
  };

  return <ModeContext.Provider value={{ isDarkModeActive, toggleMode }}>{children}</ModeContext.Provider>;
};

export default ModeProvider;

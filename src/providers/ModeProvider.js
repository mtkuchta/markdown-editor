import React, { useState, useEffect } from 'react';

export const ModeContext = React.createContext();

export const ModeProvider = ({ children }) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [didMount, setDidMount] = useState(false);

  const writeModeInLocalStorage = () => {
    window.localStorage.setItem('darkMode', isDarkModeActive);
  };

  const toggleMode = () => {
    setIsDarkModeActive(isDarkModeActive === true ? false : true);
  };

  const getUserMode = () => {
    const currentMode = JSON.parse(window.localStorage.getItem('darkMode'));
    if (currentMode !== null) {
      setIsDarkModeActive(currentMode);
    }
  };

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    getUserMode();
  }, [didMount]);

  useEffect(() => {
    if (didMount) writeModeInLocalStorage(isDarkModeActive);
  }, [isDarkModeActive]);

  return <ModeContext.Provider value={{ isDarkModeActive, toggleMode }}>{children}</ModeContext.Provider>;
};

export default ModeProvider;

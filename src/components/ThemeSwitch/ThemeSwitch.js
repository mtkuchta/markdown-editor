import React, { useContext } from 'react';
import { StyledLabel, StyledContainer, StyledDarkModeIcon, StyledLightModeIcon } from './ThemeSwitch.style';
// import { ReactComponent as DarkModeIcon } from '../../assets/icons/icon-dark-mode.svg';
// import { ReactComponent as LightModeIcon } from '../../assets/icons/icon-light-mode.svg';
import { ModeContext } from '../../providers/ModeProvider';

const ThemeSwitch = () => {
  const { isDarkModeActive, toggleMode } = useContext(ModeContext);

  return (
    <StyledContainer>
      <StyledDarkModeIcon $isDarkModeActive={isDarkModeActive} />
      <StyledLabel className="switch">
        <input type="checkbox" onChange={toggleMode} checked={isDarkModeActive} />
        <span className="slider"></span>
      </StyledLabel>
      <StyledLightModeIcon $isDarkModeActive={isDarkModeActive} />
    </StyledContainer>
  );
};

export default ThemeSwitch;

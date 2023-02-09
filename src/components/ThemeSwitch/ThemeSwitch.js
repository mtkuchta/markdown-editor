import { StyledLabel, StyledContainer } from './ThemeSwitch.style';
import { ReactComponent as DarkModeIcon } from '../../assets/icons/icon-dark-mode.svg';
import { ReactComponent as LightModeIcon } from '../../assets/icons/icon-light-mode.svg';

const ThemeSwitch = () => {
  return (
    <StyledContainer>
      <DarkModeIcon />
      <StyledLabel className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </StyledLabel>
      <LightModeIcon />
    </StyledContainer>
  );
};

export default ThemeSwitch;

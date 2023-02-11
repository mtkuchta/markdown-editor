import styled from 'styled-components';
import { ReactComponent as DarkModeIcon } from '../../assets/icons/icon-dark-mode.svg';
import { ReactComponent as LightModeIcon } from '../../assets/icons/icon-light-mode.svg';

export const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.color_600};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 30px;
    bottom: 6px;
    background-color: ${({ theme }) => theme.colors.color_100};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:focus + .slider {
    box-shadow: none;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(-24px);
    -ms-transform: translateX(-24px);
    transform: translateX(-24px);
  }
`;

export const StyledDarkModeIcon = styled(DarkModeIcon)`
  path {
    fill: ${({ theme, $isDarkModeActive }) => ($isDarkModeActive ? theme.colors.color_100 : theme.colors.color_600)};
  }
`;

export const StyledLightModeIcon = styled(LightModeIcon)`
  path {
    fill: ${({ theme, $isDarkModeActive }) => ($isDarkModeActive ? theme.colors.color_6100 : theme.colors.color_100)};
  }
`;

import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  flex-grow: 2;

  textarea {
    width: 100%;
    height: 100%;
    padding: 16px;
    font-family: 'Roboto Mono', monospace;
    outline: none;
    border: none;
    background-color: ${({ theme, $isDarkModeActive }) =>
      $isDarkModeActive ? theme.colors.backgroundDark : theme.colors.backgroundLight};
    color: ${({ theme, $isDarkModeActive }) => ($isDarkModeActive ? theme.colors.color_400 : theme.colors.color_700)};
  }
`;

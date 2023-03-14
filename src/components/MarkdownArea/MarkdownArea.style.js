import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const StyledContainer = styled.div`
  width: 100%;
  flex-grow: 2;
  padding: 26px;
  padding-left: 30px;
  background-color: ${({ theme, $isDarkModeActive }) =>
    $isDarkModeActive ? theme.colors.backgroundDark : theme.colors.backgroundLight};
  color: ${({ theme, $isDarkModeActive }) => ($isDarkModeActive ? theme.colors.color_400 : theme.colors.color_700)};
`;

export const StyledRactMarkdown = styled(ReactMarkdown)`
  font-family: 'Roboto Mono', monospace;
  outline: none;
  border: none;
  pre {
    background-color: red;
  }
`;

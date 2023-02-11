import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import DocumentsProvider from './DocumentsProvider';
import ModeProvider from './ModeProvider';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ModeProvider>
        <GlobalStyle />
        <DocumentsProvider>{children}</DocumentsProvider>
      </ModeProvider>
    </ThemeProvider>
  );
};

export default AppProviders;

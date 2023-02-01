import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import DocumentsProvider from './DocumentsProvider';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DocumentsProvider>{children}</DocumentsProvider>
    </ThemeProvider>
  );
};

export default AppProviders;

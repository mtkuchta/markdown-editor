import { AppWrapper, ViewContainer } from './App.style';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

function App() {
  return (
    <AppWrapper>
      <ViewContainer>
        <Sidebar />
        <Header />
      </ViewContainer>
    </AppWrapper>
  );
}

export default App;

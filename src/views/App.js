import { useState } from 'react';
import { AppWrapper, StyledMain, ViewContainer } from './App.style';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ViewBar from '../components/ViewBar/ViewBar';
import PreviewArea from '../components/PreviewArea/PreviewArea';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeView, setActiveView] = useState('markdown');

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleView = () => {
    setActiveView(activeView === 'markdown' ? 'preview' : 'markdown');
  };

  return (
    <AppWrapper>
      <ViewContainer isMenuVisible={isMenuVisible}>
        <Sidebar />
        <Header isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        <StyledMain>
          <ViewBar activeView={activeView} toggleView={toggleView} />
          {activeView === 'preview' && <PreviewArea />}
        </StyledMain>
      </ViewContainer>
    </AppWrapper>
  );
}

export default App;

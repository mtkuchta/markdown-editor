import { useState } from 'react';
import { AppWrapper, ViewContainer } from './App.style';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <AppWrapper>
      <ViewContainer isMenuVisible={isMenuVisible}>
        <Sidebar />
        <Header isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
      </ViewContainer>
    </AppWrapper>
  );
}

export default App;

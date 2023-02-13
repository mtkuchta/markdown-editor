import React, { useContext } from 'react';
import { StyledContainer, StyledText } from './ViewBar.style';
import { ReactComponent as IconShow } from '../../assets/icons/icon-show-preview.svg';
import { ReactComponent as IconHide } from '../../assets/icons/icon-hide-preview.svg';
import { ModeContext } from '../../providers/ModeProvider';

const ViwBar = ({ activeView, toggleView }) => {
  const { isDarkModeActive } = useContext(ModeContext);
  return (
    <StyledContainer $isDarkModeActive={isDarkModeActive}>
      <p className="activeView">{activeView}</p>
      {activeView === 'markdown' ? <IconShow onClick={toggleView} /> : <IconHide onClick={toggleView} />}
    </StyledContainer>
  );
};

export default ViwBar;

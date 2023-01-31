import { StyledContainer, StyledText } from './ViewBar.style';
import { ReactComponent as IconShow } from '../../assets/icons/icon-show-preview.svg';
import { ReactComponent as IconHide } from '../../assets/icons/icon-hide-preview.svg';

const ViwBar = ({ activeView, toggleView }) => {
  return (
    <StyledContainer>
      <StyledText>{activeView}</StyledText>
      {activeView === 'markdown' ? <IconShow onClick={toggleView} /> : <IconHide onClick={toggleView} />}
    </StyledContainer>
  );
};

export default ViwBar;

import { useContext } from 'react';
import { StyledContainer } from './PreviewArea.style';
import { ModeContext } from '../../providers/ModeProvider';
import { DocumentsContext } from '../../providers/DocumentsProvider';

const PreviewArea = () => {
  const { isDarkModeActive } = useContext(ModeContext);
  const { currentDocument } = useContext(DocumentsContext);
  console.log(isDarkModeActive);
  return (
    <StyledContainer $isDarkModeActive={isDarkModeActive}>
      <textarea value={'sfdsfffffffffffffffffffffffffffffffff'} />
    </StyledContainer>
  );
};

export default PreviewArea;

import { useContext } from 'react';
import { StyledContainer, StyledRactMarkdown } from './MarkdownArea.style';
import { DocumentsContext } from '../../providers/DocumentsProvider';
import { ModeContext } from '../../providers/ModeProvider';

const MarkdownArea = () => {
  const { currentDocument } = useContext(DocumentsContext);
  const { isDarkModeActive } = useContext(ModeContext);
  return (
    <StyledContainer $isDarkModeActive={isDarkModeActive}>
      <StyledRactMarkdown children={currentDocument.content} />
    </StyledContainer>
  );
};

export default MarkdownArea;

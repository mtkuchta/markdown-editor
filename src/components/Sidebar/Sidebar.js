import { useContext } from 'react';
import { StyledSidebar, StyledLogo, StyledText } from './Sidebar.style';
import Button from '../Button/Button';
import DocumentsList from '../DocumentsList/DocumentsList';
import { DocumentsContext } from '../../providers/DocumentsProvider';

const Sidebar = () => {
  const { userDocuments } = useContext(DocumentsContext);
  return (
    <StyledSidebar>
      <StyledLogo>markdown</StyledLogo>
      <StyledText>my documents</StyledText>
      <Button text="+ New Document" buttonWidth="202px" onClick={() => console.log('new document')} />
      <DocumentsList documents={userDocuments} />
    </StyledSidebar>
  );
};

export default Sidebar;

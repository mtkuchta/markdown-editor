import { StyledList, StyledItem } from './DocumentsList.style';
import { ReactComponent as DocumentIcon } from '../../assets/icons/icon-document.svg';

const DocumentsList = ({ documents }) => {
  return (
    <StyledList>
      {documents.map((document, index) => {
        return (
          <StyledItem key={index}>
            <DocumentIcon />
            <div className="text-container">
              <p className="doc-date">{document.createdAt}</p>
              <p className="doc-name">{document.name}</p>
            </div>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export default DocumentsList;

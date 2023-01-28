import { StyledHeader } from './Header.style';
import MenuIcon from '../../assets/icons/icon-menu.svg';
import DocumentIcon from '../../assets/icons/icon-document.svg';
import SaveIcon from '../../assets/icons/icon-save.svg';
import DeleteIcon from '../../assets/icons/icon-delete.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className="menu-icon-container">
        <img src={MenuIcon} alt="menu icon" />
      </div>
      <div className="file-name-container">
        <img src={DocumentIcon} alt="document icon" />
        <p>welcome.md</p>
      </div>
      <div className="icons-container">
        <img src={DeleteIcon} alt="delete icon" className="deleteIcon" />
        <div>
          <img src={SaveIcon} alt="save icon" className="saveIcon" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

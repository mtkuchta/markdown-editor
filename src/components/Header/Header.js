import { StyledHeader } from './Header.style';
import MenuIcon from '../../assets/icons/icon-menu.svg';
import DocumentIcon from '../../assets/icons/icon-document.svg';
import SaveIcon from '../../assets/icons/icon-save.svg';
import DeleteIcon from '../../assets/icons/icon-delete.svg';
import CloseIcon from '../../assets/icons/icon-close.svg';

const Header = ({ isMenuVisible, toggleMenu }) => {
  return (
    <StyledHeader isMenuVisible>
      <div className="menu-icon-container">
        {isMenuVisible ? (
          <img src={CloseIcon} alt="menu icon" onClick={toggleMenu} className="close-icon" />
        ) : (
          <img src={MenuIcon} alt="menu icon" onClick={toggleMenu} />
        )}
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

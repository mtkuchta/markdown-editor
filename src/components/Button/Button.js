import { StyledButton } from './Button.style';

const Button = ({ text, buttonWidth, onClick }) => {
  return (
    <StyledButton buttonWidth={buttonWidth} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;

import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  width: ${({ buttonWidth }) => buttonWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.color_100};
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 4px;
  padding: 24px 0;
  outline: none;
  border: none;
`;

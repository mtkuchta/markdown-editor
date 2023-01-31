import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.color_200};
  padding: 0 15px 0 15px;
`;

export const StyledText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.heading_S};
  line-height: 16px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.color_500};
  text-transform: uppercase;
`;

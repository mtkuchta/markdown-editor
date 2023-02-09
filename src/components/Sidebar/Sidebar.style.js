import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  height: 100%;
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.color_900};
  padding-left: 24px;
  padding-bottom: 30px;
`;

export const StyledLogo = styled.p`
  font-family: 'Commissioner', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.color_100};
  padding: 27px 0;
`;

export const StyledText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.color_500};
  padding-bottom: 27px;
`;

import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  height: 100%;
  grid-area: sidebar;
  background-color: ${({ theme }) => theme.colors.color_900};
`;

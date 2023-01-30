import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const ViewContainer = styled.div`
  width: calc(100vw + 250px);
  height: 100%;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 56px auto;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
  transform: ${({ isMenuVisible }) => (isMenuVisible ? 'translate(0)' : 'translate(-250px)')};
  transition: 0.4s;
  transition-timing-function: ease;
`;

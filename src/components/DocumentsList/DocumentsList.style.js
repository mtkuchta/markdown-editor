import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding-top: 24px;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 26px;

  .text-container {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
  }

  .doc-date {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.color_500};
  }

  .doc-name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.color_100};
    padding-top: 3px;
  }
`;

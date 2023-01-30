import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100vw;
  grid-area: header;
  /* height: 56px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.color_800};
  padding-right: 10px;

  .menu-icon-container {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.color_700};

    img {
      width: 23px;
      height: 14px;
    }
  }

  .file-name-container {
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 2;
    margin-left: 20px;
    margin-right: 50px;

    img {
      height: 16px;
      width: 14px;
    }
    p {
      color: ${({ theme }) => theme.colors.color_100};
      font-size: ${({ theme }) => theme.fontSize.heading_M};
      font-family: 'Roboto', sans-serif;
      margin-left: 15px;
    }
  }

  .icons-container {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.button};
      border-radius: 5px;
      margin-left: 20px;

      .saveIcon {
        width: 16px;
        height: 16px;
      }
    }
    .deleteIcon {
      width: 18px;
      height: 20px;
    }
  }
`;

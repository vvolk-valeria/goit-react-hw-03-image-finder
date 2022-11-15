import styled from '@emotion/styled';

export const Item = styled.li`
  text-decoration: none;
  cursor: pointer;
  display: block;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 7px 3px rgba(29, 16, 102, 0.75);

  :hover {
    box-shadow: 0px 0px 7px 6px rgba(32, 28, 59, 0.75);
  }

  @media screen and (min-width: 390px) {
    width: 340px;
  }
  @media screen and (min-width: 725px) {
    width: calc((100% - 20px * 1) / 2);
  }

  @media screen and (min-width: 1080px) {
    width: calc((100% - 20px * 2) / 3);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 20px * 3) / 4);
  }
`;

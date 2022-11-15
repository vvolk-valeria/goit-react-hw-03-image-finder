import styled from '@emotion/styled';

export const Btn = styled.button`
  display: block;
  min-width: 250px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: rgba(120, 226, 207, 0.8);
  box-shadow: 0px 0px 5px 5px rgba(146, 207, 235, 0.75);
  cursor: pointer;
  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 5px 5px rgb(125, 177, 201);
  }
`;

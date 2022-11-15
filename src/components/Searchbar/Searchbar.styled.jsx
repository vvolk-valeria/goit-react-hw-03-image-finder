import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(150, 248, 230, 0.8);
  box-shadow: 0px 0px 10px 5px rgba(146, 207, 235, 0.75);
  padding: 15px 10px;
  text-align: center;
`;

export const Form = styled.form`
  text-align: center;
`;

export const Btn = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: transparent;
  background-color: rgba(150, 248, 230, 0.8);
  box-shadow: 0px 0px 5px 5px rgba(146, 207, 235, 0.75);
  cursor: pointer;
  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 5px 5px rgb(125, 177, 201);
  }
`;

export const Span = styled.span`
  display: block;
  font-weight: 600;
  font-size: 18px;
  color: rgb(44 127 146);
  :hover {
    color: rgb(179, 237, 250);
  }
`;

export const Input = styled.input`
  padding: 10px 10px;
  border-radius: 5px;
  border: 2px solid rgb(108, 178, 235);
  min-width: 350px;
  outline: transparent;
  font-weight: 400;
  font-size: 14px;
`;

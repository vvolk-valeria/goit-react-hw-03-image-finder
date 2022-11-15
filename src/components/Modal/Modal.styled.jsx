import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 80vw;
  background-color: transparent;
  overflow: hidden;
  border-radius: 8px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start; /* см. ниже */
  align-items: center;
  z-index: 99;
  padding: 30px 0;
`;

export const Window = styled.div`
  background: #fff;
  margin: auto;
  flex-shrink: 0;

  /* Установим по умолчанию ширину 600px
    но она будет не больше ширины браузера */
  width: 600px;
  max-width: 100%;

  /* Заготовка для будущих анимаций */
  transition: transform 0.15s ease 0s, opacity 0.15s ease 0s;
  transform: scale(1);
`;

export const BackdropShadow = styled.div`
  position: fixed;
  border: none;
  display: block;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 98;
  opacity: 0;
  transition: opacity 0.15s ease;
  background-color: black;

  pointer-events: auto;
  opacity: 0.6;
`;

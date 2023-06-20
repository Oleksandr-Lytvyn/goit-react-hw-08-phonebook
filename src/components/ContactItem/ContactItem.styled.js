import styled from 'styled-components';

export const ItemStyled = styled.li`
  height: 90px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
`;

export const DeleteItemSvg = styled.svg`
  width: 22px;
  height: 22px;
  background-color: transparent;
  transform: rotate(45deg);
  fill: #b47465;
`;

import React from 'react';
import { Servant } from '../../types/Servant';
import styled from 'styled-components';

interface ServantSquareProps {
  servantInfo: Servant;
  onClick: () => void;
}

const StyledDiv = styled.div`
  width: 100px; /* Ajusta a largura */
  height: 80px; /* Ajusta a altura */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  background-color: lightgray;
  font-weight: bold;
  text-align: center;
  border-radius: 8px; /* Opcional */
  user-select: none; /* Impede a seleção de texto */
  cursor: pointer; /* Adiciona o estilo de cursor de clique */
`;

export function ServantSquare({ servantInfo, onClick }: ServantSquareProps) {
  return (
    <StyledDiv onClick={onClick}>
      {servantInfo.name}
    </StyledDiv>
  );
}

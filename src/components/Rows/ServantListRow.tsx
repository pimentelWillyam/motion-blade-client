import React, { useEffect } from 'react';
import { Servant } from '../../types/Servant';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { ServantSquare } from '../Squares/ServantSquare';

interface ServantListRowProps {
  listOfServants: Servant[] | null;
  selectedServant: Servant | null;
  setSelectedServant: React.Dispatch<React.SetStateAction<Servant | null>>;
}

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row; /* Organiza os itens em uma linha */
  gap: 2px; /* Espaçamento entre os quadrados reduzido para 2px */
  justify-content: center; /* Centraliza os itens horizontalmente */
  overflow-x: auto; /* Permite rolar horizontalmente se os itens ultrapassarem a tela */
`;

const ServantListRow: React.FC<ServantListRowProps> = ({ listOfServants, selectedServant, setSelectedServant }) => {
  const handleServantSelection = (servant: Servant | null) => {
    if (selectedServant === servant) {
      setSelectedServant(null);
    } else {
      setSelectedServant(servant);
    }
  };

  useEffect(() => {
    console.log('renderizado');
  }, [listOfServants]);

  if (!listOfServants) {
    return <p>Nenhum servo disponível.</p>;
  }

  return (
    <StyledContainer>
      {listOfServants.map(servant => (
        <ServantSquare
          servantInfo={servant}
          onClick={() => handleServantSelection(servant)}
          key={servant.name}
        />
      ))}
    </StyledContainer>
  );
};

export default ServantListRow;

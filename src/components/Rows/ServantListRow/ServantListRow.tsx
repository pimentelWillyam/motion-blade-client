import { useEffect } from 'react';
import { Servant } from '../../../types/Servant';
import './ServantListRow.css';
import { ServantSquare } from '../../Squares/ServantSquare';
import { Container } from 'react-bootstrap';

function ServantListRow(props: { listOfServants: Servant[] | null, selectedServant: Servant | null, setSelectedServant: React.Dispatch<React.SetStateAction<Servant | null>> }) {

  const handleServantSelection = (servant: Servant | null) => {
    if (props.selectedServant == servant) {
      props.setSelectedServant(null);
    } else {
      props.setSelectedServant(servant);
    }
  }

  useEffect(() => {
    console.log('renderizado');
  }, [props.listOfServants]);

  if (!props.listOfServants) {
    return <p>Nenhum servo disponível.</p>;
  }

  return (
    <Container id='servant-list'>
      {props.listOfServants.map(servant => (
        <ServantSquare
          servantInfo={servant}
          onClick={() => handleServantSelection(servant)} 
          key={servant.name}
        />
      ))}
    </Container>
  );
}

export default ServantListRow;

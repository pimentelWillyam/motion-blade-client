import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import VisualizeAttributesButton from '../../Buttons/VisualizeAttributesButton/VisualizeServantDetailsButton';
import DatabaseServant from '../../../models/DatabaseServant';
import axios from 'axios';
import DeleteServantButton from '../../Buttons/DeleteServantButton/DeleteServantButton';
import { handleServantDeletion } from '../../../handlers/handleServantDeletion';

function MyServantsTable(props: {setIsLoadingModal, setSuccessToast, setFailureToast}) {
  const [servants, setServants] = useState<DatabaseServant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchServants = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/servants/${localStorage.getItem('login')}`); 
      if (response.status !== 200) {
        throw new Error('Erro ao buscar os servos.');

      }
      setServants(response.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    

    fetchServants();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th></th>
          <th></th>
          <th></th>

        </tr>
      </thead>
      <tbody>
        {servants.map((servant) => (
          <tr key={servant.id}>
            <td>{servant.name}</td>
            <td><VisualizeAttributesButton servantName={servant.name} /></td>
            <td><DeleteServantButton onClick={() => handleServantDeletion(servant.name, props.setIsLoadingModal, fetchServants, props.setSuccessToast, props.setFailureToast)} /></td>

          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyServantsTable;

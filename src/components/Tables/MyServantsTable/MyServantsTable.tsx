import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import VisualizeAttributesButton from '../../Buttons/VisualizeAttributesButton/VisualizeAttributesButton';
import VisualizeInventoryButton from '../../Buttons/VisualizeInventoryButton/VisualizeInventoryButton';
import DatabaseServant from '../../../models/DatabaseServant';
import axios from 'axios';
import DeleteServantButton from '../../Buttons/DeleteServantButton/DeleteServantButton';
import { handleLoginSubmission } from '../../../handlers/handleLoginSubmission';
import { handleServantDeletion } from '../../../handlers/handleServantDeletion';

function MyServantsTable() {
  const [servants, setServants] = useState<DatabaseServant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServants = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/servants/${localStorage.getItem('login')}`); // Substitua pela URL real da API
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
            <td><VisualizeAttributesButton /></td>
            <td><VisualizeInventoryButton /></td>
            <td><DeleteServantButton onClick={() => handleServantDeletion(servant.name, props.setIsLoadingModal, props.setSuccessToast, setFailureToast)} /></td>

          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyServantsTable;

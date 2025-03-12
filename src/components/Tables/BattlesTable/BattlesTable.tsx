import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import EnterBattleButton from '../../Buttons/EnterBattleButton';
import axios from 'axios';
import DatabaseBattle from '../../../models/DatabaseBattle';



function BattlesTable() {
  const [battles, setBattles] = useState<DatabaseBattle[]>([]);

  useEffect(() => {
    const fetchBattles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/battle')
        setBattles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBattles();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Quantidade de Mestres</th>
          <th>Quantidade de Servos</th>
          <th>Fase da batalha</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {battles.map((battle, index) => (
          <tr key={battle.id}>
            <td>{index + 1}</td>
            <td>{battle.name}</td>
            <td>
              {battle.participants_name_list}/{}
            </td>
            <td>
              {}/{}
            </td>
            <td>{}</td>
            <td>
              <EnterBattleButton nomeBatalha={battle.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BattlesTable;

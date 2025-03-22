import { useEffect, useState } from 'react';
import styled from 'styled-components';
import EnterBattleButton from '../../Buttons/EnterBattleButton';
import axios from 'axios';
import DatabaseBattle from '../../../models/DatabaseBattle';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #ddd;
  }
`;


function BattlesTable() {
  const [battles, setBattles] = useState<DatabaseBattle[]>([]);

  useEffect(() => {
    const fetchBattles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/battle');
        setBattles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBattles();
  }, []);

  return (
    <StyledTable>
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
            <td>{battle.participants_name_list}/{}</td>
            <td>{}/{}</td>
            <td>{}</td>
            <td>
              <EnterBattleButton nomeBatalha={battle.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default BattlesTable;

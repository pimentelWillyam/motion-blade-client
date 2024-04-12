import Table from 'react-bootstrap/Table';
import EnterBattleButton from '../../Buttons/EnterBattleButton/EnterBattleButton';

function BattlesTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Quantidade de Mestres</th>
          <th>Quantidade Servos</th>
          <th>Fase da batalha</th>
          <th></th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Guararapes</td>
          <td>0/10</td>
          <td>0/10</td>
          <td>Preparação</td>
          <td><EnterBattleButton /></td>

        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>2</td>
          <td>Aljubarrota</td>
          <td>2/10</td>
          <td>4/10</td>
          <td>Combate</td>
          <td><EnterBattleButton /></td>

        </tr>
      </tbody>
    </Table>
  );
}

export default BattlesTable;
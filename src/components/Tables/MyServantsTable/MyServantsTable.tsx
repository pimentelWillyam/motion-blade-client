import Table from 'react-bootstrap/Table';
import VisualizeAttributesButton from '../../Buttons/VisualizeAttributesButton/VisualizeAttributesButton';
import VisualizeInventoryButton from '../../Buttons/VisualizeInventoryButton/VisualizeInventoryButton';

function MyServantsTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Nível</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Fulano</td>
          <td>10</td>
          <td><VisualizeAttributesButton /></td>
          <td><VisualizeInventoryButton /></td>

        </tr>
      </tbody>
    </Table>
  );
}

export default MyServantsTable;
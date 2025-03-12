import styled from 'styled-components';
import { Table } from "react-bootstrap";
import { Battle } from '../../types/Battle';
import { SelectedAction } from '../../types/SelectedAction';
import { handleBoardCellClick } from '../../handlers/handleBoardCellClick';
import { Servant } from '../../types/Servant';

const StyledTable = styled(Table)`
  width: 100%;
  margin-top: 5%;
  border-collapse: collapse;

  td, th {
    width: 8vw;
    height: 8vh;
    text-align: center;
    border: 1px solid black;
  }

  tbody tr:nth-child(even) td:nth-child(odd),
  tbody tr:nth-child(odd) td:nth-child(even) {
    background-color: #b58863 !important; /* Cor escura do tabuleiro */
  }

  tbody tr:nth-child(even) td:nth-child(even),
  tbody tr:nth-child(odd) td:nth-child(odd) {
    background-color: #f0d9b5 !important; /* Cor clara do tabuleiro */
  }
`;

export default function BattleBoard(props: { 
  battle: Battle, 
  selectedServant: Servant | null, 
  setSelectedServant: React.Dispatch<React.SetStateAction<Servant | null>>, 
  selectedAction: SelectedAction | null, 
  setSelectedAction: React.Dispatch<React.SetStateAction<SelectedAction | null>>
}) {
    return (
        <StyledTable bordered>
            <tbody>
                {props.battle.map.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <td 
                                onClick={() => handleBoardCellClick(
                                    props.selectedAction, 
                                    props.setSelectedAction, 
                                    props.selectedServant, 
                                    props.setSelectedServant, 
                                    props.battle.name, 
                                    rowIndex, 
                                    colIndex
                                )} 
                                key={colIndex}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
}

import './BattleBoard.css'
import { Table } from "react-bootstrap";
import { Battle } from '../../../types/Battle';
import { SelectedAction } from '../../../types/SelectedAction';
import { handleBoardCellClick } from '../../../handlers/handleBoardCellClick';
import { Servant } from '../../../types/Servant';

export default function BattleBoard(props: { battle: Battle, selectedServant: Servant | null, setSelectedServant: React.Dispatch<React.SetStateAction<Servant | null>>, selectedAction: SelectedAction | null, setSelectedAction: React.Dispatch<React.SetStateAction<SelectedAction | null>>}) {
    return (
        <Table className="battle-board" bordered>
            <tbody>
                {props.battle.map.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <td 
                                onClick={() =>  handleBoardCellClick(props.selectedAction, props.setSelectedAction, props.selectedServant, props.setSelectedServant, props.battle.name, rowIndex, colIndex)} 
                                key={colIndex}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}


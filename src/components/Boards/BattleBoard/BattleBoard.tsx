import DatabaseBattle from "../../../models/DatabaseBattle";
import "./BattleBoard.css";
import Table from "react-bootstrap/Table";

export default function BattleBoard(props: { battle: DatabaseBattle }) {
    return (
        <Table bordered hover>
            <tbody>
                {props.battle.map.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <td onClick={() => console.log(`clicou na coluna ${colIndex} e na lina ${rowIndex}`)} key={colIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

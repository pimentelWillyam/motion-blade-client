import { FetchBattleByName } from "../helpers/battleHelpers/FetchBattleByName";
import { SelectedAction } from "../types/SelectedAction";
import { Servant } from "../types/Servant";
import { UpdateServant } from '../helpers/servantHelpers/UpdateServant';
import { UpdateBattle } from '../helpers/battleHelpers/UpdateBattle';
import { FetchServantByName } from "../helpers/servantHelpers/FetchServantByName";

export const handleBoardCellClick = async (selectedAction: SelectedAction | null, setSelectedAction: React.Dispatch<React.SetStateAction<SelectedAction | null>>, selectedServant: Servant | null, setSelectedServant: React.Dispatch<React.SetStateAction<Servant | null>>, battleName: string, cellLine: number, cellColumn: number): Promise<void> => {
  const battle = await FetchBattleByName.execute(battleName)
  switch (selectedAction) {

    case 'destacamento':
      if (selectedServant === null) throw new Error('Houve um erro ao destacar um servo inexistente')
      if (selectedServant.battleInfo.isInBattle === true) throw new Error('Houve um erro ao destacar um servo que já está destacado em uma batalha')
      console.log(`Destacar o servo ${selectedServant.name} na batalha ${battleName}`);
      battle.participantsNameList.push(selectedServant.name)
      battle.map[cellLine][cellColumn] = selectedServant.name
      selectedServant.battleInfo.battleId = battle.id
      selectedServant.battleInfo.battleName = battle.name
      selectedServant.battleInfo.horizontalPosition = cellColumn
      selectedServant.battleInfo.verticalPosition = cellLine
      selectedServant.battleInfo.isInBattle = true
      await UpdateServant.execute(selectedServant.name, selectedServant)
      UpdateBattle.execute(battleName, battle)
      setSelectedAction(null)
      break;
      case null:
        if (selectedServant !== null && selectedServant.name === battle.map[cellLine][cellColumn]) setSelectedServant(null)
        else if (battle.map[cellLine][cellColumn] === '')  setSelectedServant(null)
        else setSelectedServant(await FetchServantByName.execute(battle.map[cellLine][cellColumn]))
      break
    default:
      break;
  }

}
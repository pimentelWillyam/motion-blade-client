import {Battle} from '../../types/Battle'
import { Servant } from "../../types/Servant";

export class UpdateBattleMapAfterServantMovement {
  static execute(servant: Servant, battle: Battle, previousVerticalPosition: number, previousHorizontalPosition: number): Battle {
    console.log('previousVerticalPosition', previousVerticalPosition, 'previousHorizontalPosition', previousHorizontalPosition)
    if (battle.map[servant.battleInfo.verticalPosition][servant.battleInfo.horizontalPosition] !== '') throw new Error('Nao pode se mover para uma posicao ocupada')
    battle.map[previousVerticalPosition][previousHorizontalPosition] = ''
    battle.map[servant.battleInfo.verticalPosition][servant.battleInfo.horizontalPosition] = servant.name
    return battle
  }
}

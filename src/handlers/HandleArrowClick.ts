import { MoveServant } from "../helpers/servantHelpers/MoveServant";
import { Direction } from "../types/Direction";
import { Battle } from "../types/Battle";
import { UpdateServant } from "../helpers/servantHelpers/UpdateServant";
import { UpdateBattle } from "../helpers/battleHelpers/UpdateBattle";
import { MoveServantOnBattleMap } from "../helpers/battleHelpers/MoveServantOnBattleMap";
import { Servant } from "../types/Servant";

export class HandleArrowClick {
  static async execute(servant: Servant, battle: Battle, movementDirection: Direction): Promise<void>{
    try {
      const previousHorizontalPosition = servant.battleInfo.horizontalPosition
      const previousVerticalPosition = servant.battleInfo.verticalPosition
      servant = MoveServant.execute(servant, movementDirection)
      battle = MoveServantOnBattleMap.execute(servant, battle, previousVerticalPosition, previousHorizontalPosition)
      UpdateServant.execute(servant.name, servant)
      UpdateBattle.execute(battle.name, battle)
    } catch (error) {
      console.error(error)
    }
    
  }
}
import { MoveServant } from "../helpers/servantHelpers/MoveServant";
import { Direction } from "../types/Direction";
import { Battle } from "../types/Battle";
import { UpdateServant } from "../helpers/servantHelpers/UpdateServant";
import { UpdateBattle } from "../helpers/battleHelpers/UpdateBattle";
import { UpdateBattleMapAfterServantMovement } from "../helpers/battleHelpers/UpdateBattleMapAfterServantMovement";
import { Servant } from "../types/Servant";

export class HandleArrowClick {
  static async execute(servant: Servant, battle: Battle, movementDirection: Direction): Promise<void>{
    try {
      console.log('battle', battle)
      console.log('servant', servant.battleInfo)


      const previousHorizontalPosition = servant.battleInfo.horizontalPosition
      const previousVerticalPosition = servant.battleInfo.verticalPosition
      servant = MoveServant.execute(servant, movementDirection)
      battle = UpdateBattleMapAfterServantMovement.execute(servant, battle, previousVerticalPosition, previousHorizontalPosition)
      UpdateServant.execute(servant.name, servant)
      UpdateBattle.execute(battle.name, battle)
    } catch (error) {
      console.error(error)
    }
    
  }
}
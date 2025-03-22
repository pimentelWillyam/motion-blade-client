import { Servant } from "../../types/Servant";

export class RemoveBattleFromServant {
  static execute(servant: Servant): Servant {
    servant.battleInfo.battleId = ''
    servant.battleInfo.battleName = ''
    servant.battleInfo.horizontalPosition = -1
    servant.battleInfo.verticalPosition = -1
    servant.battleInfo.isInBattle = false
    servant.battlePoints.actionPoints = 0
    servant.battlePoints.initiativePoints = 0
    servant.battlePoints.movementPoints = 0
    return servant
    }
  }

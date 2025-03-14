import { RemoveServantFromBattle } from "../helpers/battleHelpers/RemoveServantFromBattle"
import { UpdateBattle } from "../helpers/battleHelpers/UpdateBattle"
import { RemoveBattleFromServant } from "../helpers/servantHelpers/RemoveBattleFromServant"
import { UpdateServant } from "../helpers/servantHelpers/UpdateServant"
import { Battle } from "../types/Battle"
import { Servant } from "../types/Servant"

export class HandleRemoveUserFromBattleButtonClick {
  static async execute(servant: Servant, battle: Battle): Promise<void>{
    try {
      console.log('removendo usuario da batalha...')
      const battleWithouServant = await RemoveServantFromBattle.execute(battle, servant.name)
      const servantWithouBattle = await RemoveBattleFromServant.execute(servant)
      await UpdateBattle.execute(battleWithouServant.name, battleWithouServant)
      await UpdateServant.execute(servantWithouBattle.name, servantWithouBattle)
    }
    catch (error) {
      console.error(error)
    }
  }
}
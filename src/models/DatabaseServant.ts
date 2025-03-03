import Attributes from "../types/Attributes"
import BattleInfo from "../types/BattleInfo"
import { BattlePoints } from "../types/BattlePoints"
import CombatCapabilities from "../types/CombatCapabilities"
import Inventory from "../types/Inventory"
import Maestry from "../types/Maestry"
import Profession from "../types/Profession"

interface DatabaseServant {
  id: string
  master_id: string
  name: string
  father_profession: Profession
  youth_profession: Profession
  current_attributes: Attributes
  maximum_attributes: Attributes
  combat_capabilities: CombatCapabilities
  battle_points: BattlePoints

  battle_info: BattleInfo
  inventory: Inventory
  maestry: Maestry
}

export default DatabaseServant

import Attributes from "./Attributes"
import BattleInfo from "./BattleInfo"
import { BattlePoints } from "./BattlePoints"
import CombatCapabilities from "./CombatCapabilities"
import Inventory from "./Inventory"
import Maestry from "./Maestry"
import Profession from "./Profession"

export interface Servant  {
    readonly id: string
    readonly masterId: string
    readonly name: string
    readonly fatherProfession: Profession
    readonly youthProfession: Profession
    currentAttributes: Attributes
    maximumAttributes: Attributes
    combatCapabilities: CombatCapabilities
    battlePoints: BattlePoints
    inventory: Inventory
    maestry: Maestry
    battleInfo: BattleInfo
}
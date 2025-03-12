import { Armor } from "./Armor"
import { Weapon } from "./Weapon"

interface Inventory {
  primaryArmor: Armor
  secondaryArmor: Armor
  carriedWeapons: Weapon[]
  primaryWeapon: Weapon
  secondaryWeapon: Weapon | null
  denars: number
}

export default Inventory

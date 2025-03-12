import Damage from "./Damage"
import MaestryType from "./MaestryType"
import WeaponType from "./WeaponType"

export type Weapon = {
  readonly type: WeaponType
  readonly maestryType: MaestryType
  readonly strikable: boolean
  readonly throwable: boolean
  readonly shootable: boolean
  readonly needsTwoHandsToWield: boolean
  readonly damage: Damage
  readonly hittingBuff: number
  readonly defendingBuff: number
}
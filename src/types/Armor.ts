import ArmorType from "./ArmorType"

 export type Armor = {
  readonly type: ArmorType
  readonly debuff: number
  condition: number
  readonly maximumCondition: number
  }

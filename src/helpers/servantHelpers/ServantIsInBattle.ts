import { Battle } from "../../types/Battle";

export class ServantIsInBattle {
  static execute(servantName: string, battle: Battle | null): boolean{
    if (battle === null) return false
    return battle.participantsNameList.includes(servantName)
  }
}
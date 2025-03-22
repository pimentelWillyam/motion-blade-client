import { Battle } from "../../types/Battle";

export class RemoveServantFromBattle {
  static execute(battle: Battle, servantName: string): Battle {
    for (let i=0; i<battle.map.length; i++){
      for (let j=0; j<battle.map[i].length; j++){
        if (battle.map[i][j] === servantName) battle.map[i][j] = ''
      }
    }
    battle.participantsNameList.forEach((participantName, i, participantsNameList) => {if (participantName === servantName) participantsNameList.splice(i, 1)})
    battle.turnInfo.servantsYetToPlay.forEach((servantYetToPlay, i, servantsYetToPlayList) => {if (servantYetToPlay === servantName) servantsYetToPlayList.splice(i, 1)})
    if (battle.turnInfo.servantAboutToPlay === servantName) battle.turnInfo.servantAboutToPlay = ''
    return battle
  }
}
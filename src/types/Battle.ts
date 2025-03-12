import TurnInfo from "./TurnInfo"

export type Battle = {
  id: string
  name: string
  participantsNameList: string[]
  map: string[][]
  turnInfo: TurnInfo
}
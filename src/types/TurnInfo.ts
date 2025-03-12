import { Servant } from "./Servant"

interface TurnInfo {
  servantsYetToPlay: Servant[] | undefined
  servantAboutToPlay: Servant | undefined

}

export default TurnInfo

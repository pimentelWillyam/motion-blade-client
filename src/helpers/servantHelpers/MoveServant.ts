import { Direction } from "../../types/Direction";
import { Servant } from "../../types/Servant";

export class MoveServant {
  static execute(servant: Servant, movementDirection: Direction): Servant {
    switch (movementDirection) {
      case 'up':
        if (servant.battleInfo.verticalPosition <= 0) throw new Error('Nao pode se mover mais para cima')
        servant.battleInfo.verticalPosition -= 1;
        break;

      case 'down':
        if (servant.battleInfo.verticalPosition >= 7) throw new Error('Nao pode se mover mais para baixo')
        servant.battleInfo.verticalPosition += 1;
        break;

      case 'left':
        if (servant.battleInfo.horizontalPosition <= 0) throw new Error('Nao pode se mover mais para esquerda')
        servant.battleInfo.horizontalPosition -= 1;
        break;

      case 'right':
        if (servant.battleInfo.horizontalPosition >= 7) throw new Error('Nao pode se mover mais para direita')
        servant.battleInfo.horizontalPosition += 1;
        break;
      default:
        break;
    }
    return servant
  }
}

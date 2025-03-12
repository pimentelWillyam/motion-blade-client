import axios from "axios";
import {Battle} from '../../types/Battle'

export class UpdateBattle {
  static async execute(battleName: string, battleToUpdate: Battle): Promise<void> {
    const response = await axios.patch(`http://localhost:4000/api/battle/${battleName}`, battleToUpdate);
    if (response.status !== 200) throw new Error("Falha ao atualizar batalha");
    console.log('deu bom')
  }
}

import axios from "axios";
import { Servant } from "../../types/Servant";

export class UpdateServant {
  static async execute(servantName: string, servantToUpdate: Servant): Promise<void> {
    const response = await axios.patch(`http://localhost:4000/api/servant/${servantName}`, servantToUpdate);
    if (response.status !== 200) throw new Error("Falha ao atualizar servo");
    console.log('deu bom')
  }
}

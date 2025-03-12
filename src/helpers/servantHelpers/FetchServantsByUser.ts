import axios from "axios";
import { Servant } from "../../types/Servant";

export class FetchServantsByUser {
  static async execute(login: string): Promise<Servant[]>{
    const response = await axios.get(`http://localhost:4000/api/servants/${login}`)
    if (response.status !== 200) throw new Error('Falha ao buscar servos')
    return response.data as Servant[]
  }
}
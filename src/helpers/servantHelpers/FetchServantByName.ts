import axios from "axios";
import { Servant } from "../../types/Servant";

export class FetchServantByName {
  static async execute(name: string): Promise<Servant>{
    const response = await axios.get(`http://localhost:4000/api/servant/${name}`)
    if (response.status !== 200) throw new Error('Falha ao buscar servo')
    return response.data as Servant
  }
}
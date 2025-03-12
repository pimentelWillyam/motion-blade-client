import axios from "axios";
import { Battle } from "../../types/Battle";

export class FetchBattleByName {
  static async execute(name: string): Promise<Battle>{
    const response = await axios.get(`http://localhost:4000/api/battle/${name}`)
    if (response.status !== 200) throw new Error('Falha ao buscar batalha')
    return response.data as Battle
  }
}
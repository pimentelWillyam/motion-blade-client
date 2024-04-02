import config from '../../config';

const hostApi = config.api.host
const portaApi = config.api.port

const url = `${hostApi}:${portaApi}/api/auth`

import axios from 'axios'

export const AutenticacaoService = {
	async autenticaUsuario(login: string, password: string){
		const response = await axios.post(url,{
			login: login,
			password: password
		});
		return response
		}
}
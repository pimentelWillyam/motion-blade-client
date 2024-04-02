import axios from 'axios'

export const ArquivoValidator = {

	criacaoArquivoEValida(titulo: string,descricao: string,data: string,tipo: string,Arquivo: any){
		if (titulo == ''){
			return false
		}
		else if (descricao == ''){
			return false
		}
		else if (data == ''){
			return false
		}
		else if (tipo == ''){
			return false
		}
		else if (Arquivo == ''){
			return false
		}
		else{
			return true
		}
	}
}
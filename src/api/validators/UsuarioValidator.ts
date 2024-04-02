export const UsuarioController = { 

	criacaoUsuarioEValida(login: string, senha: string, senhaRepetida: string, email: string, rank: string){
		if (login == ''){
			return false
		}
		else if (senha == ''){
			return false
		}
		else if (senhaRepetida == '' ){
			return false
		}
		else if (senha != senhaRepetida){
			return false
		}
		else if (email == ''){
			return false
		}
		else if (rank == ''){
			return false
		}
		else{
			return true
		}
	}
}
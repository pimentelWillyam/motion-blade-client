import { UsuarioController } from "../api/controllers/UsuarioController"
import { UsuarioService } from "../api/services/UsuarioService"

export const handleSubmissaoFormsCadastroUsuario = async (event,login,setLogin,senha,setSenha,senhaRepetida,setSenhaRepetida,email,setEmail,rank,setRank) =>{
    event.preventDefault()
    if (UsuarioController.validaCriacaoUsuario(login,senha,senhaRepetida,email,rank)){
        await UsuarioService.postaUsuario(login,senha,email,rank)
        alert("Usuário cadastrado") 
    }
    else{
        alert("Dados inválidos")
    }
    setLogin('')
    setSenha('')
    setSenhaRepetida('')
    setEmail('')
    setRank('')
}
import { UsuarioService } from "../api/services/UsuarioService"

export const handleRemocaoUsuario = async (usuario,atualizaListaUsuarios) =>{
    const data = await UsuarioService.deletaUsuarioPorId(usuario.id)
    alert(`O usuário ${usuario.login} foi removido`)
    atualizaListaUsuarios()

}
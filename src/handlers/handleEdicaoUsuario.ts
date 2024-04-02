import { UsuarioService } from "../api/services/UsuarioService"

export const handleEdicaoUsuario = async (event: any,id: string | undefined, type:string) =>{
    event.preventDefault()
    console.log(id,type)
    await UsuarioService.atualizaUsuarioPorId(id, type)
    alert('O usuário foi alterado!')

}
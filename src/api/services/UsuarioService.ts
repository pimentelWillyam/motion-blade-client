import config from '../../config';

const hostApi = config.api.host
const portaApi = config.api.port
const url = `${hostApi}:${portaApi}/api/user`

import axios from 'axios'

export const UsuarioService = {

  async pegaTodosUsuarios() { // pega todos os usuários do banco
    try {
      const response = await axios.get(url);
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error);
    }
  },
      

    async pegaUsuarioPorId(id: string | undefined) {  // pega um usuário específico por ID 
        try {
          const response = await axios.get(url+'/'+id);
          console.log(response);
          return response.data
        } catch (error) {
          console.error(error);
        }
    },

    async postaUsuario(login: string, senha: string, email: string, tipo: string) { // posta um usuário 
        try {
          const response = await axios.post(url, 
            { 
              login: login,
              password: senha,
              email: email,
              type: tipo,
            }
          )
          console.log(response);
        } catch (error) {
            console.error(error);
            console.log("deu ruim")
        }
      },

      async atualizaUsuarioPorId(id: string | undefined, type: string){ // atualiza o usuário de determinado ID 
          try{
            console.log(type)
            const response = await axios.patch(url+"/"+id, 
              { 
                type: type,
              }
            )
            console.log("URL:", url+"/"+id)
            console.log(type)
            console.log(response)
            return response
          }catch (error){
            console.error(error)
          }
      },

      async deletaUsuarioPorId(id: number) { // deleta usuário de determinado ID
        try {
          const response = await axios.delete(url+"/"+id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
}
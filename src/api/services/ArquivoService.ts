import config from '../../config';

const hostApi = config.api.host
const portaApi = config.api.port
const url = `${hostApi}:${portaApi}/api/file`

import JsFileDownloader from 'js-file-downloader';

import axios from 'axios'
import { Arquivo } from '../models/Arquivo';

export const ArquivoService = {

  async pegaListaBoletim() { // pega todos os boletins do banco
	try {
      const response = await axios.get(url);
      return response.data
    } catch (error) {
      console.error(error);
    }
  },
      

    async pegaBoletimPorId(id: number) { // pega um boletim específico por ID
        try {
          const response = await axios.get(url+'/'+id);
          return response.data
        } catch (error) {
          console.error(error);
        }
    },

    async postaBoletim(formData: any) { // posta um boletim
        try {
          console.log(formData)
          const response = await axios.post(url,formData)
          return response
        } catch (error) {
            console.error(error);
        }
      },

      async baixaArquivoPorId(id: number, title: string){
        try{
          const arquivo: Arquivo = await axios.get(url+'/'+id);
          console.log(arquivo)
          new JsFileDownloader({ 
            url: `${url}/${id}`,
            autoStart: true,
            filename: `${title}.pdf`
          })
        }catch(erro){
          console.error(erro)
        }
      },

      async atualizaBoletimPorId(id: number,titulo: string, descricao: string, tipo: string, arquivo: any){ // atualiza o boletim de determinado ID
          try{
            const response = await axios.patch(url+"/"+id, 
              { 
                titulo: titulo,
                descricao: descricao,
                tipo: tipo,
                arquivo: arquivo,
              }
            )
            console.log(response)
            return response
          }catch (error){
            console.error(error)
          }
      },

      async deletaBoletimPorId(id: number) { // deleta boletim de determinado ID
        try {
          const response = await axios.delete(url+"/"+id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
}
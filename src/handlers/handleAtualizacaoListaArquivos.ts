import {Arquivo} from '../api/models/Arquivo'
import {ArquivoService} from "../api/services/ArquivoService"

export const handleAtualizacaoListaArquivos = async (tipoArquivo: string, setlistaArquivos) =>{
    const listaArquivos = await ArquivoService.pegaListaBoletim()
    console.log(listaArquivos)
    const listaArquivosFiltrados = listaArquivos.filter((arquivo: Arquivo ) => arquivo.type == tipoArquivo)
    setlistaArquivos(listaArquivosFiltrados)
}
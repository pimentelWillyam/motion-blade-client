import { ArquivoService } from "../api/services/ArquivoService"
import { Arquivo } from "../api/models/Arquivo"
import { DownloadFileController} from '../api/controllers/DownloadFileController'



export const handleDownloadArquivo = async (arquivo: Arquivo) =>{
    await new DownloadFileController().execute(arquivo.id as string)  
}
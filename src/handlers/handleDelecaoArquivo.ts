import {MapeamentoProcessosService} from "../api/services/MapeamentoProcessosService"
import {ProgramaIntegridadeService} from "../api/services/ProgramaIntegridadeService"
//import {ProgramaExcelenciaGestaoService} from "../api/services/ProgramaExcelenciaGestaoService"
import {ModeloExcelenciaGestaoService} from "../api/services/ModeloExcelenciaGestaoService"
import {LegislacaoControleInternoService} from "../api/services/LegislacaoControleInternoService"
import {IndiceAdequacaoControleInternoService} from "../api/services/IndiceAdequacaoControleInternoService"
import {ComissaoInstituidaSDSService} from "../api/services/ComissaoInstituidaSDSService"
import {RelatorioSDSControleInternoService} from "../api/services/RelatorioSDSControleInternoService"
import {BoletimGeralService} from "../api/services/BoletimGeralService"
import {BoletimInternoService} from "../api/services/BoletimInternoService"
import {LegislacaoGestaoPessoasService} from "../api/services/LegislacaoGestaoPessoasService"
import {RelatorioSDSGestaoPessoasService} from "../api/services/RelatorioSDSGestaoPessoasService"
import { ArquivoService } from "../api/services/ArquivoService"

export const handleDelecaoArquivo = async (tipoArquivo: string, arquivo,handleAtualizacaoListaArquivos,setlistaArquivos) =>{
    await ArquivoService.deletaBoletimPorId(arquivo.id )   
    handleAtualizacaoListaArquivos(tipoArquivo,setlistaArquivos)
    alert("Arquivo removido")    
}
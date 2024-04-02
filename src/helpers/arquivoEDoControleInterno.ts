export const arquivoEDoControleInterno = (tipoArquivo: string) =>{
    if (tipoArquivo === "Mapeamento de Processos" ){
        return true
    }
    else if (tipoArquivo === "Programa de Integridade" ){
        return true
    }
    else if (tipoArquivo === "Modelo de Excelência de Gestão" ){
        return true
    }
    else if (tipoArquivo === "Legislação [Controle Interno]" ){
        return true
    }
    else if (tipoArquivo === "Índice de Adequação do Controle Interno" ){
        return true
    }
    else if (tipoArquivo === "Comissão Instituída na SDS" ){
        return true
    }
    else if (tipoArquivo === "Relatório SDS [Controle Interno]" ){
        return true
    }
    else{
        return false
    }
}
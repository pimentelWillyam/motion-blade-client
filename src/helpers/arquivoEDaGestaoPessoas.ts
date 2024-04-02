export const arquivoEDaGestaoPessoas = (tipoArquivo: string) =>{
    if (tipoArquivo === "Boletim Geral" ){
        return true
    }
    else if (tipoArquivo === "Boletim Interno" ){
        return true
    }
    else if (tipoArquivo === "Legislação [Gestão de Pessoas]" ){
        return true
    }
    else if (tipoArquivo === "Relatório SDS [Gestão de Pessoas]" ){
        return true
    }
}
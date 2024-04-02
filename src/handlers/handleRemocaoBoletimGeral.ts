import { BoletimGeralService } from "../api/services/BoletimGeralService"

export const handleRemocaoBoletimGeral = async (boletim,atualizaListaBoletimGeral) =>{
    const data = await BoletimGeralService.deletaBoletimPorId(boletim._id)
    alert(`O usuário ${boletim.titulo} foi removido`)
    atualizaListaBoletimGeral()
}
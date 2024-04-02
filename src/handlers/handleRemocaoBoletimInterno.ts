import { BoletimInternoService } from "../api/services/BoletimInternoService"

export const handleRemocaoBoletimInterno = async (boletim,atualizaListaBoletimInterno) =>{
    const data = await BoletimInternoService.deletaBoletimPorId(boletim._id)
    alert(`O usuário ${boletim.titulo} foi removido`)
    atualizaListaBoletimInterno()
}
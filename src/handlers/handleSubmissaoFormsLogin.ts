import { AutenticacaoService } from "../api/services/AutenticacaoService"
import { useNavigate } from "react-router-dom"
import { SetterOrUpdater } from "recoil";
import { AxiosResponse } from "axios";
import type { NavigateFunction, NavigateOptions } from "react-router-dom";

export const handleSubmissaoFormsLogin = async (event: React.FormEvent<HTMLDivElement>, login: string, setLogin: React.Dispatch<React.SetStateAction<string>>, password: string, setSenha: React.Dispatch<React.SetStateAction<string>>, setSessao: SetterOrUpdater<{ login: undefined; tipo: undefined; token: undefined;}>, navegar: NavigateFunction) =>{
    try{
        event.preventDefault()
        const response = await AutenticacaoService.autenticaUsuario(login,password)
        console.log(response)
        setSessao({
            login: response.data.login,
            tipo: response.data.type,
            token: response.data.token
        })
        navegar('/home')
    }catch(error){
        setLogin('')
        setSenha('')
        console.error(error)
        alert('Usuário ou senha inválidos')
        navegar('/')

    }  
}

import { ArquivoService } from "../api/services/ArquivoService"
import { ArquivoValidator } from "../api/validators/ArquivoValidator"
import DateManager from "../helpers/DateManager"
import { FileSubmiterController } from "../api/controllers/FileSubmiterController"

export const handleSubmissaoFormsCadastroBoletim = async (event,titulo,setTitulo,descricao,setDescricao,data,setData,tipo,setTipo,arquivo,setArquivo) =>{
    event.preventDefault()
    console.log('arquivo:', arquivo)
    if (ArquivoValidator.criacaoArquivoEValida(titulo,descricao,data,tipo,arquivo)){
        var formData = new FormData();
        formData.append('title',titulo)
        formData.append('description',descricao)
        const dateManager = new DateManager()
        formData.append('date',dateManager.convertToLocalDate(data))
        formData.append('type',tipo)
        formData.append('file',arquivo)
        const res = await new FileSubmiterController().submit(`${titulo}_${new Date().getMilliseconds()}`, titulo, descricao, tipo, data, arquivo)
        alert("Arquivo armazenado com sucesso")
        emptyForm(setTitulo, setDescricao, setData, setTipo, setArquivo)
        return res
    }
    else{
        alert("Falha no armazenamento do boletim")
        emptyForm(setTitulo, setDescricao, setData, setTipo, setArquivo)


        return
    } 

    
}

const emptyForm = (setTitle, setDescription, setDate, setType, setFile) =>{
    setTitle('')
    setDescription('')
    setDate('')
    setType('')
    setFile('')
}
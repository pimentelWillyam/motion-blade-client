import JsFileDownloader from 'js-file-downloader';

export const handleDownloadBoletimInterno = async (boletim) =>{
    const url = `http://localhost:4000/api/boletim-interno/${boletim.Arquivo.id}`
    try{
        new JsFileDownloader({ 
            url: url,
            autoStart: true,
            filename: `${boletim.titulo}.pdf`
          })
        alert(`o boletim foi baixado`)
    }catch(erro){
        console.error(erro)
    }
    alert(`o boletim foi baixado`)
}

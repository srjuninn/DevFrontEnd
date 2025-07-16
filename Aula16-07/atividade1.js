// EX01
// Crie uma função baixarArquivo(callback).
// Simule um tempo de espera com setTimeout().
// Após o tempo, exiba "Download concluído!".
// Chame uma função de callback que exibe "Abrindo arquivo...".

function baixarArquivo(callback){
    console.log("Baixando arquivo...📁")
    setTimeout(()=> {
        console.log("Download concluído! ✅")
        callback()
    },2000)
}

const abrirArquivo = () => console.log("Abrindo arquivo...📁")

baixarArquivo(abrirArquivo)
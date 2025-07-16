// EX02
// Crie uma função processarDados(callback).
// Dentro dela, simule o processamento com setTimeout().
// Após 2 segundos, exiba "Dados processados!".
// Em seguida, chame uma função de callback que exibe "Mostrando resultado na tela...".

const processarDados = (callback) => {
    console.log("Processando dados...")

    setTimeout(() => {
        console.log("Dados processados!✅")
        callback()
    }, 2000)
}
const dadosProcessados = () => console.log("Mostrando dados na tela...💻")

processarDados(dadosProcessados)
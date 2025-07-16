// EX03
// Crie uma função enviarNotificacao(callback).
// Simule um envio com setTimeout() por 1,5 segundo.
// Depois, exiba "Notificação enviada!".
// Logo após, chame uma função de callback que mostra "Confirmação: notificação entregue.".

const enviarNotificacao = (callback) => {
    console.log("Enviando notificação...")
    setTimeout(() =>{
        console.log("Notificação enviada ✔️")
        callback()
    }, 1500)
}

const notificacaoEntregue = () => console.log("Confirmação: notificação entregue.📦")

enviarNotificacao(notificacaoEntregue)
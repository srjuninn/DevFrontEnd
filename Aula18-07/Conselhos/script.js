const conselhoGerado = document.getElementById("conselho-gerado")
const btn = document.getElementById("conselho")

const buscarConselho = () => {

    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.slip.advice)

            conselhoGerado.innerText = data.slip.advice
        })
        .catch((err) => {
            conselhoGerado.innerText = "Erro ao encontrar o conselho!"
        })

}
btn.addEventListener("click", () => {
    buscarConselho()
})
let cep = document.getElementById("input_cep")
let btn = document.getElementById("btn-cep")
let logradouro = document.getElementById("logradouro");
let bairro = document.getElementById("bairro");
let regiao = document.getElementById("regiao");
let estado = document.getElementById("estado");

const buscarCep = (cep) => {

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())

        .then((data) => {
            logradouro.innerText = data.logradouro
            bairro.innerText = data.bairro
            regiao.innerText = data.regiao
            estado.innerText = data.estado
        })

        .catch((err) => {
            logradouro.innerText = "Logradouro não localizado"
            bairro.innerText = "Bairro não localizado"
            regiao.innerText = "Região não localizada"
            estado.innerText = "Estado não localizado"
        })
}

btn.addEventListener("click", (event) => {
    buscarCep(cep.value)
    event.preventDefault() // o event.preventDefault() faz com que o a pag não recarregue
    // quando o evento for executado
})


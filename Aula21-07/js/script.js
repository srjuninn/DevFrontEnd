let imgPokemon = document.getElementById("pokemon_image")
let pokemonNumber = document.getElementById("pokemon_number")
let pokemonName = document.getElementById("pokemon_name")
let inputPokemon = document.getElementById("input_search")
let buscarPokemon = document.getElementById("btn-search")
let avancarPokemon = document.getElementById("btn-next")
let voltarPokemon = document.getElementById("btn-prev")
let idAtual = 1

const buscar = (inputPokemon) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default)

            pokemonName.innerText = data.name
            pokemonNumber.innerText = data.id
            imgPokemon.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
            idAtual = data.id
            if(idAtual == 1){
                voltarPokemon.style.display = "none"
            }else {
                voltarPokemon.style.display = "flex"
            }
        })
        .catch((err) => {
            pokemonName.innerText = "Não encontrado"
            imgPokemon.style.display = "none"

        })
}
const avancar = () => {
    idAtual++
    buscar(idAtual)
}

const voltar = () => {
    if (idAtual > 1) {
        idAtual--
    }
    buscar(idAtual)
}

avancarPokemon.addEventListener("click", (event) => {
    avancar(pokemonNumber)
    event.preventDefault()
})

voltarPokemon.addEventListener("click", (event) => {
    voltar(pokemonNumber)
    event.preventDefault()
})

buscarPokemon.addEventListener("click", (event) => {
    buscar(inputPokemon.value)
    event.preventDefault()
})
window.addEventListener("load", () =>{
    buscar(1)
})
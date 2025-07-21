let container = document.getElementById("personagens-container")

fetch("https://dragonball-api.com/api/characters?limit=58")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.items)
        data.items.forEach(element => {
            // criamos um card no html
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
            <img src="${element.image}"/>
            <h2>${element.name}</h2>
            <p>Raça: ${element.race}</p> 
            <p>Gênero: ${element.gender}</p> 
            `
            container.appendChild(card) // cria o elemento e joga no html

        });
        // outra maneira de fazer o forEach ↓
        // console.log(data.items)
        // data.items.forEach(function(personagem) {
        //     console.log(personagem.name)
        // });
    })
    .catch((err) => {

    })
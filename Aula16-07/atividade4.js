// Ex04
// Crie uma função carregarProduto(callback).
// Use setTimeout() para simular um carregamento de 1 segundo.
// Depois, exiba "Produto carregado com sucesso!".
// Na sequência, execute a função de callback que exibe "Exibindo detalhes do produto.".

const carregarProduto = (callback) => {
    console.log("Carregando produto 🧑‍🦽‍➡️")
    setTimeout(() => {
        console.log("Produto carregado com sucesso! ✅")
        callback()
    }, 1000)
}

const exibirProdutos = () => console.log("Exibindo detalhes do produto...💻")

carregarProduto(exibirProdutos)
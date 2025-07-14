// Ex04 - Simular tentativas até acertar a senha
// Crie uma variável tentativa, e simule até ela ser igual à senha correta ("admin").
// A cada tentativa, mostre “Senha incorreta”.
let tentativa = prompt("Insira sua senha:");
let password = "admin";
while(tentativa != password){
    alert("sua senha está incorreta, tente novamente");
    if(tentativa === password){
        break;
    }
    tentativa = prompt("insira sua senha")
}
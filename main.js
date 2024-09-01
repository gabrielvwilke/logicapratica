let precoOriginal = parseFloat(prompt("Digite o valor do produto: "));
let percentualDoDesconto = parseFloat(prompt("Digite o percentual do desconto: "));

let valorDoDesconto = (precoOriginal * percentualDoDesconto) / 100;
let precoFinal = precoOriginal - valorDoDesconto;

console.log("Valor do desconto: R$ " + valorDoDesconto.toFixed(2));
console.log("Preco final: R$ " + precoFinal.toFixed(2));

if (percentualDoDesconto > 50) {
    console.log("Atenção! O desconto é muito alto!");
}
else {
    console.log("Desconto dentro do esperado!");
}
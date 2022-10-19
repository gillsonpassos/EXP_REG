const { texto, arquivos } = require("./base");

// * (quantificadores opcionais) 0 ou mais vezes
// + (quantificadores obrigatorios) 1 ou mais vezes
// ? (quantificadores opcionais) 0 ou 1 vez
// \ (caractere de escape)
// {n, m} minimo e maximo
// {10,} no minimo 10
// {,10} de 0 a 10
// {5, 10} de 5 a 10
// {10}

//console.log(texto);
//const regExp1 = /Jo+ão+/gi;
//console.log(texto.match(regExp1));

const regExp2 = /\.(jpe?g)/gi;

for (const arquivo of arquivos) {
  console.log(arquivo, arquivo.match(regExp2));
}

// g = global (encontra todas as ocorrencias)
// i = insensitive
// () grupos
// | ou

const { texto } = require("./base");

const regExp1 = /joão/i;

console.log(regExp1.exec(texto));

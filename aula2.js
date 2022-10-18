const { texto } = require("./base");
const regExp1 = /joão|Maria/gi;

//(...())(...)(...) $1 $2 $3

console.log(texto);
console.log(texto.match(regExp1));
console.log(texto.replace(/(joão|Maria)/gi, "<b>$1</b>"));
console.log(
  texto.replace(/(joão|Maria)/gi, function (input) {
    return " ########### " + input.toUpperCase() + " ########### ";
  })
);

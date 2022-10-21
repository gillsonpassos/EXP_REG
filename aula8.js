const { html2 } = require("./base");

// $1  $2  $3 <-- Retrovisores

//console.log(html2);
console.log(
  html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, "$1HAHAHA $3 HAHAHA$4")
);

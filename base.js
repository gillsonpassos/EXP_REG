const texto = `
João trouxe  flores para sua  amada namorada em 10 de janeiro de 1970
Maria era o nome dela.


Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente
maria, hoje sua esposa, ainda faz aquele café com pão de queijo
nas tardes de Domingo. Tambem né! Sendo a boa mineira que é,
nunca esquece seu famoso pão de queijo.
Não canso de ouvir a Maria;
"Joooooooooãoooooooooo, o café tá prontinho aqui. Veeeemm"!
`;

const arquivos = [
  "Atenção.jpg",
  "Foto.jpeg",
  "Meu gatinho.jpg",
  "Meu gatinho.JPG",
  "Meu gatinho.JPeeEEEEeeeeeeeeeeeeeeeeeeeEEEEEEEEEEEEEG",
  "Marido.png",
  "lista de compras.txt",
];

const cpfs = `Os CPFs são:
254.224.877-45  215.978.456-12  047.258.369-96 
 
 
 
 963.987.321-00
 
 963.987.32a.00  (NÃO VÁLIDO)
 963.987.32-00   (NÃO VÁLIDO) 
 `;

const cpfs2 = `254.224.877-45
 215.978.456-12 
 047.258.369-96 
 963.987.32a.00`;

const ips = `
 
 Os Ips são:
    0.0.0.0
    
    192.168.0.25

         10.10.5.12

    255.255.255.255
 
 `;

//             <*>    *   </*>  <*>     *     </*>
//             <.+>,+ <\/.+>
const alfabeto =
  " ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz @! 0123456789 !";
const html = "<p>Olá mundo</p>  <p>Olá de novo</p> <div>Sou a div</div>";

module.exports = {
  texto,
  arquivos,
  html,
  alfabeto,
  cpfs,
  ips,
  cpfs2,
};

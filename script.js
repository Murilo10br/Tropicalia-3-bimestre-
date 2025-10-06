document.addEventListener('DOMContentLoaded',function(){
const aumentafonteBotao = document.getElementById('aumentar-fonte');
const dimiuifonteBotao = document.getElementById('diminuir-fonte');

let tamanhoAtualFonte = 1;

aumentafonteBotao.addEventListener('click',function(){
tamanhoAtualFonte += 0.1;
 document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})

dimiuifonteBotao.addEventListener('click',function(){
tamanhoAtualFonte -= 0.1;
 document.body.style.fontSize = `${tamanhoAtualFonte}rem`


})
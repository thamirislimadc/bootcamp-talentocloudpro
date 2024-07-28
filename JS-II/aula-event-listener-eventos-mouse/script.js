let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let valorProduto01 = 11.66; //Exercício

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade;
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2); //Exercício

  //Exercício
  if (subtotalInfo.quantidade < 2) { 
    quantidadeSubtotal.innerText += " item";
  }
  else if (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText += " itens";
  }

}

atualizarSubtotal();

//Variáveis e dados
let btnAdicionarProduto01 = document.querySelector("#btn-adicionar-produto-01");
let btnSubtrairProduto01 = document.querySelector("#btn-subtrair-produto-01"); //Exercício
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01");

//Função
function adicionarUm() {
  quantidadeProduto01.value = Number
  (quantidadeProduto01.value) + 1;
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1 > 0 ? subtotalInfo.quantidade + 1 : 0; //Exercício
  subtotalInfo.valor = subtotalInfo.valor + valorProduto01;  
  atualizarSubtotal();
}

//Exercício
function subtrairUm() {
  quantidadeProduto01.value = Number
  (quantidadeProduto01.value) - 1 > 0 ? quantidadeProduto01.value - 1 : 0;
  subtotalInfo.quantidade = subtotalInfo.quantidade -1 > 0 ? subtotalInfo.quantidade - 1 : 0;
  subtotalInfo.valor = subtotalInfo.valor - valorProduto01;  
  atualizarSubtotal();
}

//Eventos
btnAdicionarProduto01.addEventListener("click", adicionarUm);
btnSubtrairProduto01.addEventListener("click", subtrairUm); //Exercício

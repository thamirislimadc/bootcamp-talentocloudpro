let h2 = document.querySelector('h2');
h2.style.color = 'blue';
h2.style.fontSize = '50px';

let botao = document.querySelector('button');
botao.style.backgroundColor = 'blue';
botao.style.color = 'white';
botao.style.fontSize = '14px';
botao.style.padding = '10px';
botao.style.border = 'none';
botao.style.borderRadius = '5px';
botao.style.cursor = 'pointer';

//Primeira interação
const userNameInput = document.getElementById('login-usuario');

//adicionar a classe erro
userNameInput.classList.add('error');

//capturar mensagem de erro
const errorText = document.querySelectorAll('.error-text');

//Adicionar a classe visible ao nome de usuário
errorText[0].classList.add('visible');



//Senha correta
const passwordInput = document.getElementById('login-senha');

//Adicionar a classe success
passwordInput.classList.add('correct');

//Capturar mensagem de sucesso
const correctText = document.querySelectorAll('.correct-text');



// Adicione um título simples ao site com o id 'titulo', e um elemento que 
// represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar 
// necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico. 

const titulo = document.getElementById('titulo');
titulo.innerText = 'Título criado com JavaScript';

const produto = document.getElementById('produto');
produto.innerHTML = `
  <h2>Livro</h2>
  <p>O Mundo Sem Fim - Ken Follett</p>
  <p>R$ 79,90</p>
  <img src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-ll118rzsbmyn18" alt="Imagem da capa do livro" width="300px" height="300px">
`;


// No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML
// para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.

const h1 = document.getElementById('titulo');
h1.innerText = 'Título criado com JavaScript';

const a = document.getElementsByTagName('a')[0];
a.innerText = 'Link criado com JavaScript';

const ul = document.getElementsByTagName('ul')[0];
ul.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

const ol = document.getElementsByTagName('ol')[0];
ol.innerHTML = '<li><a href="https://www.google.com">Google</a></li><li><a href="https://www.facebook.com">Facebook</a></li><li><a href="https://www.instagram.com">Instagram</a></li>';

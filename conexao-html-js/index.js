//- post 02
const post = document.getElementById('post 02');
console.log('post 02', post);

//- formulario
const form = document.getElementById('formulario');
console.log('formulario', form);

//- section com ambos os posts
const section = document.getElementsByTagName('section');
console.log('section', section);

//- datas dos posts
const data = document.getElementsByClassName('post-data');
console.log('post-datas', data);

//- textos dos posts
const texto = document.getElementsByClassName('post-texto');
console.log('post-texto', texto);

//- listas com links das redes sociais
const redesSociais = document.getElementsByClassName('lista_redes');
console.log('lista_redes', redesSociais);

//O link dentro do texto do primeiro post
const link = document.querySelector('.post-texto a');
console.log('link', link);

//- A palavra em negrito dentro do texto do segundo post
const negrito = document.querySelector('.post-texto strong');

//- O input de nome do formulário
const input = document.querySelector('input[type="text"]');
console.log('input', input);

//- Os links da lista de redes no final da página
const links = document.querySelectorAll('.lista_redes a');
console.log('links', links);

//- Os links da navegação (só os links, não os elementos de lista)
const linksNav = document.querySelectorAll('nav a');
console.log('linksNav', linksNav);

//- Os 4 "Autor:" e "Data:" em negrito nos dois posts'
const AutorData = document.querySelectorAll('post-autor strong', '.post-data strong');
console.log('post-autor strong', '.post-data strong', AutorData);

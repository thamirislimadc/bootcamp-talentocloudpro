const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },

  {
    titulo: "Pizza vegana",
    subtitulo: "A melhor pizza vegana de São Paulo",
    data: "17/07/2024",
    texto: "Descubra um restaurante incrível na Consolação que oferece um delicioso buffet por quilo no almoço e um irresistível rodízio de pizzas à noite, tudo 100% vegano. Uma experiência gastronômica que você não pode perder! Venha conhecer e se surpreenda" 
  }

]

// Article 01
// const article = document.createElement('article1');

// article.innerHTML = `
// <article id="post-1">
// <h3>${arrayPostagens[1].titulo}</h3>
// <p class="subtitulo">Comida vegana para todos!</p>
// <div class="data">06/07/2022</div>
// <p>Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)</p>
// </article>
// `

// const main = document.querySelector('main');
// main.appendChild(article);


// Article 02
// const article2 = document.createElement('article2');

// article2.innerHTML = `
// <article id="post-2">
// <h3>${arrayPostagens[1].titulo}</h3>
// <p class="subtitulo">Só delivery, para curtir em casa!</p>
// <div class="data">18/08/2022</div>
// <p>Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina.</p>
// `

// const main2 = document.querySelector('main');
// main.appendChild(article2);


// Article 03
// const article3 = document.createElement('article3');

// article3.innerHTML = `
// <article id="post-3">
// <h3>${arrayPostagens[1].titulo}</h3>
// <p class="subtitulo">Melhor do que estar na praia!</p>
//  <div class="data">30/08/2022</div>
// <p>Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!</p>
// `

// const main3 = document.querySelector('main');
// main.appendChild(article3);

// Article 04
// const article4 = document.createElement('article4');

// article3.innerHTML = `
// <article id="post-3">
// <h3>${arrayPostagens[3].titulo}</h3>
// <p class="subtitulo">Melhor do que estar na praia!</p>
//  <div class="data">17/07/2024</div>
// <p>Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!</p>
// `

// const main4 = document.querySelector('main');
// main.appendChild(article3);


for(let i = 0; i < arrayPostagens.length; i++) {

const article = document.createElement('article');

article.innerHTML = `
<h3>${arrayPostagens[i].titulo}</h3>
<p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
<div class="data">${arrayPostagens[i].data}</div>
<p>${arrayPostagens[i].texto}</p>
`
const main = document.querySelector('main');
main.appendChild(article);

}

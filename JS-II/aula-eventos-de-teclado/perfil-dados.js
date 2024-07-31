const linkPaginaPrincipal = document.querySelector('a[href="./index.html"]');

window.addEventListener('keyup', (e) => {
    if (e.code === 'Backspace') {
        console.log('Clicou no botão de voltar!');
        window.location.href = linkPaginaPrincipal.href;
    }
});

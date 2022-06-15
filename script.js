window.onload = function () {
    // Prevenir formulario de ser enviado
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Input Titulo
        const inputTitulo = document.querySelector('#titulo');
        // Input Descricao
        const inputDescricao = document.querySelector('#descricao');
        // Input Url da Imagem
        const inputUrl = document.querySelector('#url');

        // Elemento Img - Capa da série
        const imagem = document.createElement('img');
        imagem.classList.add('carro-imagem');
        // Element h2   - Título
        const titulo = document.createElement('h2');
        // Elemento p   - Descrição
        const descricao = document.createElement('p');

        // Url na Img
        imagem.setAttribute('src', inputUrl.value);
        // Título e colocar na h2
        titulo.appendChild(document.createTextNode(inputTitulo.value));
        // Descrição na p
        descricao.appendChild(document.createTextNode(inputDescricao.value));

        // Elemento .serie-item-conteudo
        const conteudo = document.createElement('div');
        conteudo.classList.add('carro-item-conteudo');

        // Pegar Img, H2 e P e inserir no Card
        conteudo.appendChild(titulo);
        conteudo.appendChild(descricao);

        // Elemento div - Card
        const item = document.createElement('div');
        item.classList.add('carro-item');
        item.appendChild(imagem);
        item.appendChild(conteudo);

        // Pegar o Card e inserir na Lista de Séries
        const lista = document.querySelector('.carro-lista');
        lista.appendChild(item);

        form.reset();
    });
}
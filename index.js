const inputTitulo = document.querySelector('#titulo');
const inputNota = document.querySelector('#nota');
const inputDuracao = document.querySelector('#duracao');
const form = document.querySelector('[data-cadastro]');
const gridFilmes = document.querySelector('[data-grid]');

class Filme {
	constructor(titulo, nota, duracao) {
		this.titulo = titulo;
		this.nota = nota;
		this.duracao = duracao;
		this.assistido = false;
		this.favorito = false;
		this.imagem = 'http://via.placeholder.com/600x300';
	}
}

let filmes = [
	new Filme('O Chamado', 3.5, 160),
	new Filme('Ender\'s Game', 4.5, 120)
];

const verificarJaCadastrado = (titulo) => filmes.some((filme) => titulo.toLowerCase() == filme.titulo.toLowerCase());

const listarFilmes = () => {
	if (filmes.length === 0) return;
	gridFilmes.innerHTML = '';

	filmes.forEach((filme) => {
		let card = document.createElement('div');
		card.className = 'card';

		let img = document.createElement('img');
		img.src = 'http://via.placeholder.com/200x300';
		img.alt = 'Imagem placeholder';
		card.appendChild(img);

		let cardBody = document.createElement('div');
		cardBody.className = 'card__body';
		card.appendChild(cardBody);

		let cardTitulo = document.createElement('p');
		cardTitulo.className = 'card__titulo';
		cardTitulo.innerText = filme.titulo;
		cardBody.appendChild(cardTitulo);

		let cardDuracao = document.createElement('p');
		cardDuracao.className = 'card__duracao';
		cardDuracao.innerText = `${filme.duracao}min`;
		cardBody.appendChild(cardDuracao);
		
		gridFilmes.appendChild(card);
	})
};

const cadastrarFilme = (e) => {
	e.preventDefault();

	let titulo = inputTitulo.value;
	let nota = Number(inputNota.value);
	let duracao = Number(inputDuracao.value);

	if (verificarJaCadastrado(titulo)) {
		console.log('Já possui um filme com esse mesmo título');
		return;
	}

	filmes.push(new Filme(titulo, nota, duracao));
	console.log('Filme adicionado com sucesso.');
	
	inputTitulo.value = '';
	inputNota.value = '';
	inputDuracao.value = '';
	listarFilmes();
};

form.addEventListener('submit', cadastrarFilme);

listarFilmes();
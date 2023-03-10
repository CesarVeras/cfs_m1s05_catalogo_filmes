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

	filmes.map((filme) => {
		gridFilmes.innerHTML += `
			<div class="card">
				<img src="http://via.placeholder.com/200x300" alt="Imagem placeholder">
				<div class="card__body">
					<p class="card__titulo">${filme.titulo}</p>
					<p class="card__duracao">${filme.duracao}</p>
				</div>
			</div>
		`;
	});
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
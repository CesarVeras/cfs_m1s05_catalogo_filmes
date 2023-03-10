const inputTitulo = document.querySelector('#titulo');
const inputNota = document.querySelector('#nota');
const inputDuracao = document.querySelector('#duracao');
const form = document.querySelector('[data-cadastro]');
const gridFilmes = document.querySelector('[data-grid]');
const inputBusca = document.querySelector('[data-input-busca]');
const btnBusca = document.querySelector('[data-button-busca]');
const btnLimpar = document.querySelector('[data-button-limpar]');

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
	new Filme('Jogos Vorazes', 4, 180),
	new Filme('Vingadores', 3.5, 140),
	new Filme('Harry Potter e as Relíquias da Morte: Parte 1', 4.5, 190),
	new Filme('O Chamado 2', 3, 110),
	new Filme('O Chamado 3', 3.5, 120),
	new Filme('Enders Game', 4.5, 120)
];

const buscarFilme = (termo) => {
	const filmesEncontrados = filmes.filter((filme) => filme.titulo.toLowerCase().includes(termo.toLowerCase()));

	if (filmesEncontrados.length === 0) console.log('Não foi encontrado nenhum filme com esse titulo');
	return filmesEncontrados;
};

const verificarJaCadastrado = (titulo) => filmes.some((filme) => titulo.toLowerCase() == filme.titulo.toLowerCase());

const listarFilmes = (array) => {
	let listaFilmes = array || filmes;
	if (listaFilmes.length === 0) return;
	gridFilmes.innerHTML = '';

	listaFilmes.map((filme) => {
		gridFilmes.innerHTML += `
			<div class="card">
				<img src="http://via.placeholder.com/200x300" alt="Imagem placeholder">
				<div class="card__body">
					<p class="card__titulo">${filme.titulo}</p>
					<p class="card__duracao">${filme.duracao}min</p>
				</div>
			</div>
		`;
	});
};

const eventoBusca = (e) => {
	const filmesEncontrados = buscarFilme(inputBusca.value);
	if (filmesEncontrados.length === 0) return;
	listarFilmes(filmesEncontrados);
	btnLimpar.setAttribute('data-visivel', 'true');
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
btnBusca.addEventListener('click', eventoBusca);
inputBusca.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') eventoBusca();
});
btnLimpar.addEventListener('click', () => {
	listarFilmes();
	btnLimpar.setAttribute('data-visivel', 'false');
});

listarFilmes();
import { assistido, naoAssistido, coracaoPreenchido, coracaoVazio, estrelaPreenchida, estrelaVazia } from './icon.js';
import { getMinutosAssistidos, setMinutosAssistidos, getHoras, getMinutos } from './calculo.js';
import Filme from './filme.js';

const inputTitulo = document.querySelector('#titulo');
const inputNota = document.querySelector('#nota');
const inputDuracao = document.querySelector('#duracao');
const form = document.querySelector('[data-cadastro]');
const gridFilmes = document.querySelector('[data-grid]');
const inputBusca = document.querySelector('[data-input-busca]');
const btnBusca = document.querySelector('[data-button-busca]');
const btnLimpar = document.querySelector('[data-button-limpar]');
const pTotalAssistido = document.querySelector('[data-total]');

let favoritosRestantes = 3;


export let filmes = [
	new Filme('O Chamado', 4, 160),
	new Filme('Jogos Vorazes', 4, 180),
	new Filme('Vingadores', 5, 140),
	new Filme('Harry Potter e as Relíquias da Morte: Parte 1', 4.5, 190),
	new Filme('O Chamado 2', 3, 110),
	new Filme('O Chamado 3', 2, 120),
	new Filme('Enders Game', 4, 120)
];

const verificarJaCadastrado = (titulo) => filmes.some((filme) => titulo.toLowerCase() == filme.titulo.toLowerCase());

const criarEstrelas = (filme) => {
	let cardNota = '<div class="card__nota">'
	for (let i = 0; i < 5; i++) {
		if (i < filme.nota) {
			cardNota += estrelaPreenchida;
		} else {
			cardNota += estrelaVazia;
		}
	}
	cardNota += '</div>'

	return cardNota;
};

const alternarFavoritoDOM = (filme, indice) => {
	gridFilmes.querySelector(`.card[data-filme="${indice}"] .coracao__preenchido`).dataset.visivel = filme.favorito;
	gridFilmes.querySelector(`.card[data-filme="${indice}"] .coracao__vazio`).dataset.visivel = !filme.favorito;
};

window.alternarFavorito = (elem) => {
	const indice = elem.dataset.filme;
	const filme = filmes[indice];
	if (!filme.favorito && favoritosRestantes > 0) {
		favoritosRestantes--;
	} else if (filme.favorito) {
		favoritosRestantes++;
	} else {
		console.log("Já existem três filmes favoritos");
		return;
	}
	filme.favorito = !filme.favorito;
	alternarFavoritoDOM(filme, indice);
};

const alternarAssistidoDOM = (filme, indice) => {
	gridFilmes.querySelector(`.card[data-filme="${indice}"] .card__assistido`).dataset.visivel = filme.assistido;
	gridFilmes.querySelector(`.card[data-filme="${indice}"] .card__nao-assistido`).dataset.visivel = !filme.assistido;
};

window.alternarAssistido = (elem) => {
	const indice = elem.dataset.filme;
	const filme = filmes[indice];
	filme.assistido = !filme.assistido;

	if (filme.assistido) {
		setMinutosAssistidos(filme.duracao);
	} else {
		setMinutosAssistidos(-1 * filme.duracao);
	}
	if (getMinutosAssistidos() === 0) {
		pTotalAssistido.innerHTML = 'Nenhum filme assistido.'
	} else {
		pTotalAssistido.innerHTML = `${getHoras()}h${(getMinutos())}min.`;
	}

	alternarAssistidoDOM(filme, indice);
};

const listarFilmes = (array) => {
	let listaFilmes = array || filmes;
	if (listaFilmes.length === 0) return;
	gridFilmes.innerHTML = '';

	listaFilmes.map((filme, i) => {
		// gridFilmes.innerHTML += ;
		gridFilmes.insertAdjacentHTML(
			'beforeend',
			`
				<div class="card" data-filme="${i}">
					<span class="card__visto" onclick="alternarAssistido(this)" data-filme="${i}">
						${assistido}
						${naoAssistido}
					</span>
					<span class="card__favorito" onclick="alternarFavorito(this)" data-filme="${i}">
						${coracaoPreenchido}
						${coracaoVazio}
					</span>
					<img src="${filme.imagem}" alt="Imagem placeholder">
					<p class="card__titulo">${filme.titulo}</p>
					<div class="card__body">
						<p class="card__duracao">${filme.duracao}min</p>
						${criarEstrelas(filme)}
					</div>
				</div>
			`) 
	});
};

const buscarFilme = (termo) => {
	const filmesEncontrados = filmes.filter((filme) => filme.titulo.toLowerCase().includes(termo.toLowerCase()));

	if (filmesEncontrados.length === 0) console.log('Não foi encontrado nenhum filme com esse titulo');
	return filmesEncontrados;
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
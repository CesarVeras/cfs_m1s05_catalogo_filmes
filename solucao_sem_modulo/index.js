const inputTitulo = document.querySelector('#titulo');
const inputNota = document.querySelector('#nota');
const inputDuracao = document.querySelector('#duracao');
const form = document.querySelector('[data-cadastro]');
const gridFilmes = document.querySelector('[data-grid]');
const inputBusca = document.querySelector('[data-input-busca]');
const btnBusca = document.querySelector('[data-button-busca]');
const btnLimpar = document.querySelector('[data-button-limpar]');
const pTotalAssistido = document.querySelector('[data-total]');

const estrelaVazia = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1000 1000">
	<path d="m520.6 54.8 133.2 265c2.8 6.9 9.7 11.1 18 12.5l298.3 43c19.4 2.8 26.4 25 12.5 38.9L766.3 619.6c-5.6 5.5-8.3 12.5-6.9 19.4l51.3 291.4c2.8 18-16.7 33.3-33.3 23.6L510.9 816.6c-6.9-4.2-15.3-4.2-22.2 0L222.3 955.4c-16.7 8.3-37.5-5.5-33.3-23.6l51.3-291.4c1.4-6.9-1.4-15.3-6.9-19.4L16.9 412.8c-13.9-12.5-5.6-36.1 12.5-38.9l298.3-43c6.9-1.4 13.9-5.6 18-12.5L479 53.4c8.3-15.2 33.3-15.2 41.6 1.4z" fill="grey"/>
</svg>`;

const estrelaPreenchida = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1000 1000">
	<path d="m520.6 54.8 133.2 265c2.8 6.9 9.7 11.1 18 12.5l298.3 43c19.4 2.8 26.4 25 12.5 38.9L766.3 619.6c-5.6 5.5-8.3 12.5-6.9 19.4l51.3 291.4c2.8 18-16.7 33.3-33.3 23.6L510.9 816.6c-6.9-4.2-15.3-4.2-22.2 0L222.3 955.4c-16.7 8.3-37.5-5.5-33.3-23.6l51.3-291.4c1.4-6.9-1.4-15.3-6.9-19.4L16.9 412.8c-13.9-12.5-5.6-36.1 12.5-38.9l298.3-43c6.9-1.4 13.9-5.6 18-12.5L479 53.4c8.3-15.2 33.3-15.2 41.6 1.4z" fill="rgb(237 193 16)"/>
</svg>`;

const coracaoVazio = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1000 1000" class="coracao__vazio" data-visivel="true">
	<path d="M725.1 48.2c-65.6 0-128.6 26.1-177.6 73.7-18.5 18-34.5 38.4-47.5 61.1-13.1-22.7-29-43.1-47.5-61.2-49-47.5-112-73.6-177.6-73.6C128.8 48.2 10 175.5 10 332c0 105.7 30.7 189.1 102.5 278.9C217 741.5 481.2 940.8 492.4 949.3c2.2 1.8 4.9 2.6 7.6 2.6s5.3-.9 7.6-2.6c11.2-8.4 275.5-207.7 379.9-338.3C959.3 521.1 990 437.7 990 332c0-156.5-118.9-283.8-264.9-283.8z" fill="grey"/>
</svg>
`;

const coracaoPreenchido = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1000 1000" class="coracao__preenchido" data-visivel="false">
	<path d="M725.1 48.2c-65.6 0-128.6 26.1-177.6 73.7-18.5 18-34.5 38.4-47.5 61.1-13.1-22.7-29-43.1-47.5-61.2-49-47.5-112-73.6-177.6-73.6C128.8 48.2 10 175.5 10 332c0 105.7 30.7 189.1 102.5 278.9C217 741.5 481.2 940.8 492.4 949.3c2.2 1.8 4.9 2.6 7.6 2.6s5.3-.9 7.6-2.6c11.2-8.4 275.5-207.7 379.9-338.3C959.3 521.1 990 437.7 990 332c0-156.5-118.9-283.8-264.9-283.8z" fill="rgb(245 57 57)"/>
</svg>
`;

const assistido = `
	<svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" stroke="grey" viewBox="0 0 24 24" class="card__assistido "data-visivel="false">
		<path stroke-linecap="round" stroke-width="3px" stroke-linejoin="round" d="M4 12s1.6-5 8-5m0 0c6.4 0 8 5 8 5m-8-5V4m6 1-2 2.5M6 5l2 2.5m7 5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
	</svg>
`;

const naoAssistido = `
	<svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" stroke="grey" viewBox="0 0 24 24" class="card__nao-assistido" data-visivel="true">
		<path stroke-linecap="round" stroke-width="3px" stroke-linejoin="round" d="M4 10s1.6 5 8 5m0 0c6.4 0 8-5 8-5m-8 5v3m6-1-2-2.5M6 17l2-2.5"/>
	</svg>
`;

class Filme {
	constructor(titulo, nota, duracao) {
		this.titulo = titulo;
		this.nota = nota;
		this.duracao = duracao;
		this.assistido = false;
		this.favorito = false;
		this.imagem = 'http://via.placeholder.com/200x300';
	}
}

let filmes = [
	new Filme('O Chamado', 4, 160),
	new Filme('Jogos Vorazes', 4, 180),
	new Filme('Vingadores', 5, 140),
	new Filme('Harry Potter e as Relíquias da Morte: Parte 1', 4.5, 190),
	new Filme('O Chamado 2', 3, 110),
	new Filme('O Chamado 3', 2, 120),
	new Filme('Enders Game', 4, 120)
];

let favoritosRestantes = 3;
let totalMinutosAssistidos = 0;

const buscarFilme = (termo) => {
	const filmesEncontrados = filmes.filter((filme) => filme.titulo.toLowerCase().includes(termo.toLowerCase()));

	if (filmesEncontrados.length === 0) console.log('Não foi encontrado nenhum filme com esse titulo');
	return filmesEncontrados;
};

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

const alternarFavorito = (elem) => {
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

const alternarAssistido = (elem) => {
	const indice = elem.dataset.filme;
	const filme = filmes[indice];
	filme.assistido = !filme.assistido;

	if (filme.assistido) {
		totalMinutosAssistidos += filme.duracao;
	} else {
		totalMinutosAssistidos -= filme.duracao;
	}
	if (totalMinutosAssistidos === 0) {
		pTotalAssistido.innerHTML = 'Nenhum filme assistido.'
	} else {
		pTotalAssistido.innerHTML = `${Math.floor(totalMinutosAssistidos/60)}h${(totalMinutosAssistidos % 60)}min.`;
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
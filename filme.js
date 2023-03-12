export default class Filme {
	constructor(titulo, nota, duracao) {
		this.titulo = titulo;
		this.nota = nota;
		this.duracao = duracao;
		this.assistido = false;
		this.favorito = false;
		this.imagem = 'http://via.placeholder.com/200x300';
	}
}
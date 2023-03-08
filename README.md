# Catálogo de Filmes

## Exercício 1 [x]

- Adicione uma seção na página inicial para cadastro de filme.

- Crie um formulário com 3 inputs (titulo, nota e duração em minutos)

- Adicione um botão "cadastrar".

## Exercício 2 [x]

- Recupere os valores dos inputs no javascript e crie uma função "**cadastrar**" adicione o Filme na variavel global.

- Após o cadastro mostre um alerta ('Filme adicionado com sucesso').
No objeto de cadastro deve ser adicionado duas propriedades favorito do tipo booleano com valor false assistido do tipo booleano com valor false opcional (colocar imagem) pode ser dinamica ou url fixa mas como mesmo tamanho dos outros.

- **Regra**:

	- Não pode cadastrar filme com o mesmo título.

	- Crie uma função para verificar o título e se caso for igual mostrar alerta "Já possui um filme com esse mesmo título" e não continua com o cadastro.

## Exercício 3 [ ]

- Crie uma função para **listar** os filmes cadastrados fazendo a criação dos elementos da DOM.

- Cada card terá a **img** do filme (fixa ou dinamica), *****o titulo, nota e duração*****.

## Exercício 4 [ ]

- Crie um input para informar o filme para busca

- Crie uma função "**buscar**" que recebe o termo de busca como parâmetro e faça o filtro dos resultados encontrados.

	- Se não achar resultado mostrar alerta com mensagem "*****Não foi encontrado nenhum filme com esse titulo*****".

- Recupere o valor do input da busca e Adicione o evento de digito de letra na função de busca.

## Exercício 5 [ ]

- Adicione um ícone no card de filme.

- Você precisará de um ícone de estrela/coração com dois tipos um com preenchimento e outro sem preenchimento

## Exercício 6 [ ]

- Crie uma função para adicionar a propriedade do filme escolhido

	- Setar propriedade de favorito para true

- E atualize no HTML via DOM o ícone.

- Quando clicar no ícone do filme que não é favorito se torna ele como favorito. Se clicar no cíone de um filme favorito torna ele como não favorito que é o estado inicial.

- **Regras**:

	- Adicione uma validação se já existir 3 filmes como favorito não faz nada e mostra mensagem "*****Já existem três filmes favoritos*****"

## Exercício 7 [ ]

- Adicione um ícone no card de filme.

- Você precisará de um ícone (fica a sua escolha) com dois tipos um com preenchimento e outro sem preenchimento.

- Representará se o filme foi assistido ou não

## Exercício 8 [ ]

- Crie uma função para adicionar a propriedade do filme assistido de acordo com o clique no ícone.

- E atualize no HTML via DOM o ícone.

- Quando clicar no ícone do filme que não foi assistido se torna ele como assistido

- Se clicar no cíone de um filme assistido torna ele como não assistido que é o estado inicial.

## Exercício 9 [ ]

**Crie uma função para adicionar a propriedade do filme assistido de acordo com o clique no ícone.**

- E atualize no HTML via DOM o ícone.

- Quando clicar no ícone do filme que não foi assistido se torna ele como assistido

- Se clicar no cíone de um filme assistido torna ele como não assistido que é o estado inicial.

## Exercício 10 [ ]

- Até aqui você fez tudo dentro de um único arquivo javascript "main.js".

	- Agora é hora de "refatorar" a sua aplicação.

	- Separe as funções utilizando "módulos".

		- calculo.js -> extrair e mover para esse módulo cáculos (ex: soma dos minutos)

		- filme.js -> extrair e mover para esse módulo recursos relacionados ao filme

		- main.js -> arquivo principal que vai importar recursos.
# Curso Node.js
Instrutor: [Erick Wendel](https://www.linkedin.com/in/erickwendel/)


___[NodeBr](https://treinamento.nodebr.org/) - Imersão em desenvolvimento de APIs com Node.js___

<br>

# Modulo 1 - Sincronia de funções Javascript

### __NodeJS Não é:__

Não é uma linguagem de programação
Não é uma ferramentas de criação de sites simples
Não é um framework
Não é uma Ferramenta para criação de aplicações front end

### __NodeJs é uma plataforma para construção de aplicações Backend usando Javascript__

- Criação de web services
- Criação de linha de comando

<br>

### __NPM: Gerenciar dependências__

Compartilhamos somente o arquivo onde salvamos as dependências, e quando a pessoa rodar os comandos ela terá todas as dependências instaladas.

Node é multiplataforma: quando for instalar as dependências ele reconhece a plataforma e instala o necessário para cada sistema operacional.

<br>

### __Ciclo de vida do Javascript__

- Funções que dependem de execução externa serão executadas em background
- A forma com que seu código é escrito é diferente da ordem em que é executado.

<br>

### __Introdução a resolução de Promises com async/await__

- Facilita a visualização do fluxo de funções;
- Não altera a performance de sua aplicação, se usar no momento certo;
- Veio do C#;
- Usar apenas quando necessitar tratar a resposta da chamada


### __Introdução à manipulação de eventos com EventEmitter__

- Ele é usado em funções contínuas;
- Nodejs usa para quase tudo em seu ecosistema
- Bastante usado também nos browsers(onClick)
- Trabalha sob o Design Pattern Observer/PubSub

<br>

# Modulo 2 - Manipulação de listas
Vamos usar a API Star Wars
[SWAPI](https://swapi.dev/)

Quando a gente da npm install axios ele ja salva como dependencia do projeto automaticamente nessa versão de node.

Quando eu tenho o package.json no projeto e rodo o npm install, ele pega todas as dependências e instala independente de qual plataforma estiver usando.

Quando roda npm install + nome, ex: npm install axios, ele instala o que você esta pedindo e salva em dependecies

<br>

## __Comandos úteis:__

```javascript
//captura o erro
console.error()
//captura o tempo do trecho
console.time('medida-promisse')
console.timeEnd('medida-promisse')
```

<br>


## __Ferramentas:__

[Hapijs](https://github.com/hapijs/hapi)

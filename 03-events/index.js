// Trabalhar com eventos

//class dentro do JS, obtemos ela
const EventEmitter = require('events');

//criamos nossa própria classe, ela vai extender todas os eventos de 
//EventEmitter para nosso MeuEmissor
class MeuEmissor extends EventEmitter {

}

//inicializa a classe, criamos um manipulador de eventos
const meuEmissor = new MeuEmissor()

const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function(click) {
    console.log("Um usuário clicou", click)
})

// //simular o click do usuário
// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no button')


// let count = 0;
// //estamos disparando o evento de click a cada 1 segundo
// setInterval(function() {
//     meuEmissor.emit(nomeEvento, 'no button' + (count ++))
// }, 1000)



//o stdin captura o que for digitado no terminal
const stdin = process.openStdin();
stdin.addListener('data', function(value) {
    //uso o to String para transformar em string o Value e 
    //usamos o trim() para remover possíveis espaços
    console.log(`Você digitou: ${value.toString().trim()}`)
})


//A promisse faz uma verificação e retorna um resultado
//Tomar muito cuidado pois se colocarmos esse código dentro de uma promisse, 
//ele vai escutar o evento somente uma vez e depois não vai responder mais
//e para eventos, não é isso que queremos.
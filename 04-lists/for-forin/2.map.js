// O map é usado para retornar um array novo baseado no que o usuario pediu




//importar o nosso obter pessoas
const service = require('./service');


//criar nosso próprio array.map
//vamos substituir uma função global do JS
//criamos o nosso própria função .map(), para entendermos como ele funciona por baixo dos panos
Array.prototype.meuMap = function(callback) {
    const novoArrayMapeado = []

    for(let indice = 0; indice <= this.length - 1; indice ++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}



// criare  chamar função
async function main() {
    try {
        const result = await service.obterPessoas('a');
        // const names = [];
        // FOREACH para cada item da minha lista ele executa a função
        
        // result.results.forEach(item => {
        //     //adicionando ao array names o item name
        //     names.push(item.name);
        // });

        /*MAP*/
        // const names = result.results.map(function (pessoa) {
        //     return pessoa.name
        // })

        /*refatorando o MAP*/
        // const names = result.results.map(pessoa => pessoa.name);

        //usando nosso .meuMap()
        const names = result.results.meuMap((pessoa, indice) => {
            return `[${indice}] ${pessoa.name}`
        })

        console.log('names', names)
    } catch (error) {
        console.error("deu ruim", error)
    }

}
main()





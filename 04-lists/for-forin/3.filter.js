//vamos extrair somente o que precisamos
//do objeto que vc me trouxe, eu quero que vc extraia somente a que eu preciso
//Desestruturação de objeto
const { obterPessoas } = require('./service');

//FILTER SINTAXE: var newArray = arr.filter(callback[, thisArg])
//PARAMETROS: callback
//Callback = Função para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:
//ELEMENT: O elemento que está sendo processado no array.
//INDEX: O índice do elemento atual que está sendo processado no array.
//ARRAY: O array para qual filter foi chamada.
//Adicionar nova implementação no objeto Array nativo do JS
Array.prototype.meuFilter = function (callback) {
    //pegar o item dentro do array

    const lista = [];

    for(index in this) {
        const item = this[index];
        //obter resultado, executamos o callback passando o item, e a lista completa
        const result = callback(item, index, this)
        // se for 0, null, "", undefined vai ser = a false

        //se o result for false, n existir, continue o fluxo
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main() {
    try {
        //vamos pegar o results de dentro do obter pessoas, neste caso vamos buscar pela letra a (todos os nomes que tem a letra a)
        const { results } = await obterPessoas(`a`);

        // //vamos filtrar para aparecer somente os items que tem a palavra lars
        // const familiaLars = results.filter(item => {
        //     //indexOf() compara o  elementoDePesquisa com os elementos do Array, 
        //     //se tiver o elemento ele retona o index(a posição) daquele elemento dentro do array, se não ele retorna -1
        //     //array.indexOf(elementoDePesquisa, [pontoInicial = 0]), primeiro parâmetro elementoAPesquisar, segundo parâmetro o ponto inicial
        //     //retona o objeto item, pega dele só o nome, deixa tudo em minúscula, vamos dizer qual elemento quero procurar no array, se for diferente de -1 é pq existe,
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
        //     return result;
        // })

        //NOSSO FILTER
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf(`lars`) !== -1
        })

        
        //vamos usar o novo array familiaLars, vamos fazer um .map() e pegar deste objeto somente o nome
        const names = familiaLars.map(pessoa => pessoa.name)
        console.log('names', names)

        
        // console.log('names', names)
    } catch (error) {
        console.error("deu ruim", error)
    }
}
main()


//O Objetivo do filter() é trazer somente os items que a gente necessita de acordo com uma condição essa condição precisa ser true ou false.
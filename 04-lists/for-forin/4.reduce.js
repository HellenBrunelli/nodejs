//vamos extrair somente o que precisamos
//do objeto que vc me trouxe, eu quero que vc extraia somente a que eu preciso
//Desestruturação de objeto
const { obterPessoas } = require('./service');

//o reduce retorna como terceiro parâmetro a lista completa
//neste caso é só inserir na function(callback, valorInicial, listaCompleta)
Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];

    for(let index = 0; index <= this.length -1; index ++) {
        // o valor anterior é 20 soma com 30 =50, pega o 50 e soma com o proximo
        //
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal;
}

async function main() {
    try {
        //buscar todos que tenham a letra a
        //pegar results dentro do obter pessoas
        const { results } = await obterPessoas(`a`);

        //trazer o peso das pessoas e somar e verificar quanto é o peso de cada um
        //pegar peso dentro do results
        const pesos = results.map(item => parseInt(item.height))
        console.log(pesos)

        //o segundo parâmetro para o reduce é a posição inicial para caso não tenha nenhum valor o array passado
        //ele fica depois da chave de fechamento e antes do parênteses
        // const total = pesos.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // })


        //exempllo com o meureduce
        const minhaLista = [
            ['Hellen', 'Brunelli'],
            ['NodeBr', 'Nerdzão']
        ]

        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo);
        }, [])
        .join(',');

        console.log('total:', total)

    }
    catch(error) {
        console.log(error)
    }
}
main()
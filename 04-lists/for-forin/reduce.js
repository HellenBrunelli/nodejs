//vamos extrair somente o que precisamos
//do objeto que vc me trouxe, eu quero que vc extraia somente a que eu preciso
//Desestruturação de objeto
const { obterPessoas } = require('./service');

async function main() {
    try {
        //buscar todos que tenham a letra a
        const { results } = await obterPessoas(`a`);
        const pesos = results.map(item => parseInt(item.height))
        console.log("pesos:",pesos)

        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        })
        console.log('total:', total)

    }
    catch(error) {
        console.log(error)
    }

}
main()
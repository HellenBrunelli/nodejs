//para trazer arquivos do node não usa ./ no require
//quando o que queremos chamar é um arquivo criado por nós usamos o ./nome
const service = require('./service');

async function main() {
    try{
        const result = await service.obterPessoas('a')
        const names = []
        
        /*FOR*/
        console.time('FOR')

        for (let i = 0; i <= result.results.length -1; i++) {
            const pessoa = result.results[i];
            names.push(pessoa.name)
        }
        console.timeEnd('FOR')
        console.log('names:', names)

        /*FOR IN*/
        console.time('FORIN')

        for (let i in result.results) {
            const pessoa = result.results[i];
            names.push(pessoa.name)
        }
        console.timeEnd('FORIN')


        /*FOR OF*/
        console.time('FOROF')

        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('FOROF')

        console.log('names:', names)
    }catch(error) {
        console.error('erro interno', error);
    }
}
main()
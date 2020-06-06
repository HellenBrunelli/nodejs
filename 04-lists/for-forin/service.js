/*Vamos criar um serviço que vai consumir a API
Temos um módulo nativo do node 
vamos aprender a instalar o módulo dentro do nodejs

requisito tem que ter instalado o package.json
*/

const axios = require('axios');
const URL = `https://swapi.dev/api/people`;

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    //axios é uma promisse, para pegar o resultado na mesma linha tem que passar o await
    const response = await axios.get(url)
    return response.data;
}

//objetivo é trazer o objeto com as caracteristicas, 
//transformar esse objetivo em módulo para que outros arquivos consigam visualizar esse módulo também.

module.exports = {
    // obterPessoas: obterPessoas
    //quando a chave tem o mesmo nome do valor, eu não preciso passar o valor
    obterPessoas 
}
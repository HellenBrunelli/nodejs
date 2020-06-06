//  Refatorando Callback para Promisses

/*
Obter usuário
Obter o número de telefone do usuário a partir do ID
Obter o Endereço do usuário pelo ID
*/
//importamos um módulo interno do node.js
const util = require('util')

//pegar a função que trabalha com callback e converter ela para promisse sem fazer alteração nenhuma nela.
const obterEnderecoAsync =  util.promisify(obterEndereco)


function obterUsuario() {
    // quando der algum problema chama o reject
    // quando for sucesso chama o resolve
    return new Promise(function resolvePromisse(resolve, reject) {
        //espera um segundo para resolver e retorne a promisse
        setTimeout(() => {
            // return reject(new Error('Deu ruim de verdade'))
            return resolve ({
                id: 1,
                nome: "Hellen",
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromisse(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: 999999999,
                ddd: 11
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0
        })
    }, 2000);

}

//primeiro adicionar async na function e ela retorna uma promisse
//ele vai aguardar a resposta para poder partir para a próxima promisse
main()
async function main() {
    try {
        console.time('medida-promisse')
        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);

        //o obter telefone e o obter endereço rodam de forma assíncrona
        //Ele roda em segundo plano
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[1];
        const telefone = resultado[0];

        console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}
            Telefone: ${telefone.ddd} ${telefone.telefone}
        `)
        console.timeEnd('medida-promisse')

    }
    catch(error) {
        console.error("Deu ruim", error)
    }

}

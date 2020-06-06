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

const usuarioPromisse = obterUsuario();

//para manipular o sucesso usamos a função .then
//para manipular erros usamos o .catch
//pipe: usuario --> telefone --> telefone

usuarioPromisse
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}
            Telefone: ${resultado.telefone.ddd} ${resultado.telefone.telefone}
        `)
    })
    .catch(function (error) {
        console.log('Deu Ruim', error)
    })
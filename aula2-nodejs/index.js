//  CALLBACK



/*
Obter usuário
Obter o número de telefone do usuário a partir do ID
Obter o Endereço do usuário pelo ID
*/

// Simular em background

//o callback tem dois parâmetros
//o primeiro é o erro o segundo o sucesso
//por padrão o callback é sempre o ultimo parâmetro


//Após 1 segundo chame o callback para informar que terminamos
function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: "Hellen",
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: 999999999,
            ddd: 11
        })
    }, 2000);
}

function obterEndereço(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0
        })
    }, 2000);

}

function resolverUsuario(error, usuario) {
    //no JS valor nulloo vazio e zero = false tudo que for diferente disso é = true
    console.log('usuario',usuario)
}

//forma de executar funcões com sincronismo
//quando vc terminar de executar a função obter usuario execute a resolverUsuario
obterUsuario(function resolverUsuario(error, usuario) {
    if(error){
        console.error('deu ruim em usuário', error)
        return;
    }
    //primeiro parâmetro é o id usuario e o segundo o callback
    obterTelefone(usuario.id, function resolvertelefone(error1, telefone ) {
        if(error1){
            console.error('deu ruim em telefone', error1)
            return;
        }
        obterEndereço(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2){
                console.error('deu ruim em endereço', error2)
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
}) 
// const telefone = obterTelefone(usuario.id);

// console.log('telefone', telefone);
let usuarios = []
const moment = require('moment')
moment.locale('pt-br')

function usuarioEntrarSala(id, nome, sala, meuId){
    const usuario = {id, nome, sala, meuId}
    usuarios.push(usuario)

    return usuario

}

function usuarioSairSala(id){
    const index = usuarios.findIndex(usuario =>usuario.id === id)

    if(index !== -1){
        return usuarios.splice(index, 1)[0]
    }
}

function mensagemFormatada(usuarioNome, mensagemParam, meuId){
    let mensagem = mensagemParam ? mensagemParam :"oi, o que precisa?"

    return{
        usuarioNome,
        mensagem,
        horario: moment().format('lll'),
        meuId
    }
}

function getUsuariosSala(){
    return usuarios
}

function getUsuario(idUsuario){
    return usuarios.find(usuario =>usuario.id === idUsuario)
}

module.exports ={
   usuarioEntrarSala,
   getUsuariosSala,
   mensagemFormatada,
   getUsuario,
   usuarioSairSala

}
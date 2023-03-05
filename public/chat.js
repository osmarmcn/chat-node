const inputTexto = document.getElementById('enviarMensagem')
const getLocalStorage = () => JSON.parse(localStorage.getItem('usuario')) ?? []

const socket = io()
const  {usuarionome, meuid} = Qs.parse(location.search, {ignoreQueryPrefix: true})
socket.emit('entrarSala', {usuarionome, meuid})

inputTexto.addEventListener('keyup', function(e){
    let key = e.key === "Enter"
    

    if(key && inputTexto.value){
       // console.log('minha menssagem:', inputTexto.value)
        //adcionarNovaMensagem(inputTexto.value)
        socket.emit('mensagemChat', inputTexto.value)

        inputTexto.value = ''
    }
})

function criarElemento(nomeElemento, classeElemento){
    let elemento = document.createElement(nomeElemento)

    

    for(let classe of classeElemento){
        elemento.classList.add(classe)
    }

    return elemento
}

 

function adcionarNovaMensagem(mensagem){
        const usuarioStorage = getLocalStorage()
        let minhaMensagem = false

        if(mensagem.meuid){
            minhaMensagem = mensagem.meuid === usuarioStorage.meuId
        }

        let divMensagem = '' 
        let divDetalhes = ''

        let quadroMensagem = document.getElementById('quadro-mensagens')
        let li = criarElemento('li', ['clearfix'])
        let span = criarElemento('span', ['message-data-time'])

       

        if(minhaMensagem){
            divMensagem = criarElemento('div', ['message', 'other-message', 'float-right'])
            divDetalhes = criarElemento('div', ['message-data', 'text-right'])

        }else{
            divMensagem = criarElemento('div', ['message', 'my-message'])
            divDetalhes = criarElemento('div', ['message-data'])

        }

            
        span.innerHTML = (minhaMensagem ? "eu" : mensagem.usuarioNome) + ', ' + mensagem.horario
        divMensagem.innerHTML = mensagem.mensagem

        divDetalhes.appendChild(span)
        li.appendChild(divDetalhes)
        li.appendChild(divMensagem)
        quadroMensagem.appendChild(li)

}


socket.on('novaMensagem', (mensagem)=>{
    adcionarNovaMensagem(mensagem)
})
const inputTexto = document.getElementById('enviarMensagem')

inputTexto.addEventListener('keyup', function(e){
    let key = e.key === "Enter"
    

    if(key && inputTexto.value){
        console.log('minha menssagem:', inputTexto.value)

        
        adcionarNovaMensagem(inputTexto.value)

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
        let quadroMensagem = document.getElementById('quadro-mensagens')
        let li = criarElemento('li', ['clearfix'])
        let span = criarElemento('span', ['message-data-time'])
        let divMensagem = criarElemento('div', ['message', 'my-message'])
        let divDetalhes = criarElemento('div', ['message-data'])

        span.innerHTML = "Nome teste, 12 jun 2023"
        divMensagem.innerHTML = mensagem

        divDetalhes.appendChild(span)
        li.appendChild(divDetalhes)
        li.appendChild(divMensagem)
        quadroMensagem.appendChild(li)

}
const setLocalStorage = (usuario) => localStorage.setItem("usuario",JSON.stringify(usuario))

function btnEntrar(){
    let inputNome = document.getElementById("nome").value 
    let idUsuario = (Math.random() *1000).toString()

    setLocalStorage({
        nome:inputNome,
        meuId: idUsuario
    })

    window.location.href="chat.html?usuarionome="+ inputNome + "&meuId=" + idUsuario


}
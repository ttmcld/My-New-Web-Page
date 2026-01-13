document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(){
    if (document.getElementById("nome").value != ""  && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){ 
        alert("Prontinho! Voçê receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}


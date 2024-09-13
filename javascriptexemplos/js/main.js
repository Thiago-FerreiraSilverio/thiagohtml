var cont = 0
function alerta(){
    alert("Cliquei no botão.")
    console.log("Você clicou no Botão.")
}

function contador(){
    cont++
    console.log("Contador: "+ cont)
    if (cont >=10){
        alert("Você execedeu os cliques a pagina será fechada.")
        window.close()
    }
}

function mostrarMensagem(){
    document.getElementById("success").style.display = "block";
    document.getElementById("msg").style.display = "block";
    document.getElementById("msgBold").style.display = "block";
}
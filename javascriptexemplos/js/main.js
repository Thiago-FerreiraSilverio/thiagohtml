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


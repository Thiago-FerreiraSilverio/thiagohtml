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

function gerarTabela(){
    let container = document.querySelector("#container")
    //let paragrafo = document.createElement("p")
    //paragrafo.innerHTML = "Inserindo texto"
    //container.appendChild(paragrafo)
    //criando e elemento table
    let tabela = document.createElement("table")
    //Atribuindo o id para a tabela
    tabela.setAttribute("id", "tab")


    cols = ["Nome", "Email", "Cidade", "Telefone"]
    let linha = document.createElement("tr")
    for(i = 0; i < cols.length; i++){
        let th = document.createElement("th")
        th.innerText = cols[i]
        linha.appendChild(th)
    }
    tabela.appendChild(linha)

    for(i = 0; i < 10; i++){
        let linha = document.createElement("tr")
        for (j = 0; j < cols.length; j++){
            let td = document.createElement("td")
            td.innerText = "Texto " + j
            linha.appendChild(td)
        }
        tabela.appendChild(linha)
    }

    

    container.appendChild(tabela)
}

function formToJason(){
    let user = {nome: "", email: "", cidade: "", telefone: ""};
}
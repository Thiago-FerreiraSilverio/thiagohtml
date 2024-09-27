//pegando os dados dos usuarios
let usuarios = users;

//Gera HTML da tabela de usuarios
function gerarTabelaUsuarios(){

    let tab = document.getElementById("tab");

    //Criando Tabela
    let tabela = document.createElement("table");
    tabela.setAttribute("id", "tab");

    //Criando cabeçalho da Tabela
    let cabecalho = tabela.createTHead();
    let linhaCabecalho = cabecalho.insertRow();

    //Pega o nome das chaves do obejeto jason (Colunas da tabela)
    let chaves = Object.keys(usuarios[0]);
    let colunas = chaves;
    colunas.forEach(coluna => {
        let th = document.createElement('th');
        th.textContent = coluna;
        linhaCabecalho.appendChild(th);
    });

    //Criando corpo da Tabela
    let corpo = tabela.createTBody();
    usuarios.forEach(usuarios => {
        let linha = corpo.insertRow();
        Object.values(usuarios).forEach(valor => {
            let cell = linha.insertCell();
            cell.textContent = valor;
        });
    });

    let divtab = document.getElementById("divtab");
    divtab.appendChild(tabela);
}

//Adiciona na tabela a coluna do Crud
function adicionarColunaCRUD(){
    const btns = ["Editar", "Excluir"];
    let tabela = document.getElementById("tab");
    let thead = tabela.getElementsByTagName("thead")[0];
    let tbody = tabela.getElementsByTagName("tbody")[0];

    //adiciona o cabeçalho da nova coluna CRUD
    let novaCelulaCabecalho = document.createElement("th");
    novaCelulaCabecalho.textContent = "CRUD";
    thead.rows[0].appendChild(novaCelulaCabecalho);

    //Cria os botões e as linhas da tabela
    for(i = 0; 1 < tbody.rows.length; i++){
        let novaCelula = tbody.rows[i].insertCell(-1);

        btns.forEach(btn => {
            const botao = document.createElement("button");
            if(btn == "Editar"){
                botao.setAttribute("onclick", "editarLinha(this)")
            } else{
                botao.setAttribute("onclick", "excluirUsuarios(this)")
            }
            botao.textContent = btn;
            novaCelula.appendChild(botao);
        });
    }
}

//Limpa os inputs do form
function limparFormulario(){
    //Pega todos os inputs do form
    const inputs = document.querySelectorAll('input');

    //intera pelo array de inputs limpando o campo
    inputs.forEach(input => {
        input.value = "";
    });
}

//Captura o Usuario da linha em que o botão foi clicado
function editarLinha(button){
    //Pega a tr da linha do botão
    const linha = button.closest('tr');

    //Pega todas as celulas da linha
    const colunas = linha.getElementsByTagName('td');
    
    //Cria um obejeto jason para transferir os dados do usuario
    const user = {
        id: colunas[0].textContent,
        nome: colunas[1].textContent,
        email: colunas[2].textContent,
        cidade: colunas[3].textContent,
        telefone: colunas[4].textContent
    };

    console.log(user);
    jsonToForm(user);


}

//Transfere os dados da linha da tabela para o form
function jsonToForm(user){
    for(const key in user){
        const input = document.querySelector(`[nome="${key}"]`);
        if(input){
            input.value = user[key];
        }
    }
}




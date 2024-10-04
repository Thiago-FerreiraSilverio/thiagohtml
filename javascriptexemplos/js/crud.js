//pegando os dados dos usuarios
let usuarios = users;
//Define o id de um novo usuario ao inserido na lista
let novoid = usuarios.length + 1;

//Gera HTML da tabela de usuarios
function gerarTabelaUsuarios(){

    let tab = document.getElementById("tab");

    if(tab){
        tab.remove();
    }

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
                botao.setAttribute("onclick", "excluirUsuario(this)")
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

    var section = document.querySelector(".container")
    section.scrollIntoView({behavio: 'smooth'});

}

//atualiza a tabela e a coluna do crud

function atualizaTabela(){
    //limpa os inputs do form
    limparFormulario();
    //chama a função que gera a tabela novamente quando o usuario é atualizado 
    gerarTabelaUsuarios();
    // chama a função adicionar coluna
    adicionarColunaCRUD();
}

//Transfere os dados da linha da tabela para o form
function jsonToForm(user){
    for(const key in user){
        const input = document.querySelector(`[name="${key}"]`);
        if(input){
            input.value = user[key];
        }
    }
}

//transfere os dados do formulario para um user json
//transfere o user para o aary de usuarios
//valida os dados da tabela
function formToJSON(event){
    //Não deixa executar o submit do form
    event.preventDefault();

    let user = {id: "", nome: "", email: "", cidade: "", telefone: ""};

    //Seleciona todos os inputs do form
    const inputs =  document.querySelectorAll('input');

    //Pega os valores dos inputs e transfere para o objeto json user
    inputs.forEach(input => {
        user[input.name] = input.value;
    });

    if(user.id!= ""){

        let index = usuarios.findIndex(usuario => usuario.id == user.id);

        if(index !== -1){
            usuarios[index] = user;
        }
    } else {
        inserirUsuario(user);
    }


    console.log(user);

    atualizaTabela();


}

//isere o usuario no arry json
function inserirUsuario(user){
    user.id = novoid.toString();
    novoid += 1;
    usuarios.push(user);
}

function excluirUsuario(button){
    //Pega a linha em que o botão foi clicado
    const linha = button.closest('tr');
    //pega todas colunas da linha
    const coluna = linha.getElementsByTagName('td');
    //pega o id do usuario
    const userId = coluna[0].textContent;
    //Percorre o arry de usuarios para encontrar o usuario pelo id
    const index = usuarios.findIndex(user => user.id === userId);
    console.log("Excluindo: " + index);
    
    if (index !== -1){
        usuarios.splice(index, 1);
        atualizaTabela();
        console.log(`Usuario com id ${userId} excluido com sucesso.`);
    } else{
        console.log(`Usuario com id ${userId} não encontrado.`);
    }
}



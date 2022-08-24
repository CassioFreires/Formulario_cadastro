// Array que armazendo objeto
let cadastro = [];
let contador = 0;

// Selecionando os inputs
let SelectnomeESobrenome = document.querySelector('#nome-e-sobrenome');
let selectEmail = document.querySelector('#email');
let selectTelefone = document.querySelector('#telefone');
let selectCep = document.querySelector('#cep');
let SelectNumeroDaCasa = document.querySelector('#numero-casa');
let SelectComplemento = document.querySelector('#complemento');
let selectBairro = document.querySelector('#bairro');
let selectEstado = document.querySelector('#select-estado');

function date() {
    // Data
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    const verificarDia = dia < 10 ? `0${dia}` : dia;
    const verificarMes = mes < 10 ? `0${mes}` : mes;

    const dataCompleta = `${verificarDia} / ${verificarMes} / ${ano}`;
    return 'Data do Registro - ' + dataCompleta;
}

// Função que realiza uma ação de click -> após clicar gera um objeto com as informações do usuario e manda enviar o objeto para o array cadastro;
function enviarCadastro() {
    // Recupera o valor das options do HTML
    let valor_estado = selectEstado.value;

    // Objeto com os valores dos inputs 
    let obj = {

        nome_e_sobrenome: SelectnomeESobrenome.value,
        email: selectEmail.value,
        telefone: parseInt(selectTelefone.value),
        cep: parseInt(selectCep.value),
        numero_da_casa: parseInt(SelectNumeroDaCasa.value),
        complemento: SelectComplemento.value,
        bairro: selectBairro.value,
        estado: selectEstado.value,
    }
    //Validações dos campos dos inputs
    if (obj.nome_e_sobrenome == '' || obj.email == '' || obj.telefone == '' || obj.cep == '' || obj.numero_da_casa == '' || obj.complemento == '' || obj.bairro == '' || obj.estado == '') {
        return false;
    }
    else if (isNaN(obj.telefone)) {
        alert('TELEFONE inválido')
        return false;
    }
    else if(isNaN(obj.cep)){
        alert('CEP inválido');
        return false;
    }
    else if(isNaN(obj.numero_da_casa)){
        alert('NÚMERO DA CASA inválido')
        return false;
    }

    // Contador de usuários (objetos)
    contador++;

    // Enviando o objeto para o array
    cadastro.push(obj)

    // Previnindo o evento
    event.preventDefault();

    // Enviando a data de cadastro
    date()

    // Criando a tabela após o click
    criarTabela()
}

// Função de criar tabela dinâmica
function criarTabela() {
    let tBody = document.querySelector('#tBody');
    tBody.innerHTML = '';
    let tabela = document.querySelector('#tabela');


    // Chaves dos objetosrr
    let chave = Object.keys(cadastro[0]);

    // Iterando sobre os objeto de array e adicionando linha na tabela
    for (let elements of cadastro) {
        tabela.appendChild(tBody)
        let rowTbody = tBody.insertRow();
        let button = document.createElement('button');
        button.innerHTML = '<img src="img/btn-remove.png"></img>';
        button.classList = 'btn-remover';


        for (key in elements) {
            let cell = rowTbody.insertCell(); //inserir colunas na linha
            rowTbody.appendChild(button)
            cell.classList = 'td-remove';
            let txt = document.createTextNode(elements[key]); //inserir os valores nas colunas
            cell.appendChild(txt)
        }
    }

    // Data de registro
    date();
}


// Removendo linha da tabela ao clicar no button de remover
let tabela = document.querySelector('#tabela');
tabela.addEventListener('click', evento => {
    let el = evento.target;
    if (el.classList.contains('btn-remover')) {
        let valorLinha = document.querySelector('.td-remove').textContent;
        let celula = el.parentNode;
        celula.remove();

    }
})
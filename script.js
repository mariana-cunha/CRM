// 1 - Login

const login = () => {
    const loginInput = document.getElementById("emailLogin").value;
    const senhaInput = document.getElementById("senhaLogin").value;

    localStorage.setItem("emailLogin", loginInput);
    localStorage.setItem("senha", senhaInput);

    console.log("email: ", localStorage.emailLogin)
    console.log("senha: ", localStorage.senha)

}




// 2 - formulário de Interesse



// 3 - Página de cadastro de interesse

let modal = document.querySelector(".modal");
let botaoAbrir = document.querySelector(".trigger");
let botaoFechar = document.querySelector(".botaoFechar")

const popup = () => {
    modal.classList.toggle("modalAberto");
}

function clicar(event) {
    if (event.target === modal){
        event.preventDefault();
        popup();

    }
}

botaoFechar.addEventListener("click", popup);

// modal cria card de cadastro

const formModal = document.getElementById("cadastroModal");
const enviarModal = document.getElementById("enviarModal");
const lista = document.getElementById("lista");

const cadastroOportunidade = () => {
    formModal.addEventListener("submit", (event) => {
        event.preventDefault();

        const inputNomeModal = document.getElementById("nomeModal").value;
        const inputFunilModal = document.getElementById("funilModal").value;
        const inputCampanhaModal = document.getElementById("campanhaModal").value;
        const inputEmailModal = document.getElementById("emailModal").value;

        localStorage.setItem("nome", inputNomeModal);
        localStorage.setItem("funil", inputFunilModal);
        localStorage.setItem("campanha", inputCampanhaModal);
        localStorage.setItem("email", inputEmailModal);

        modal.classList.toggle("modalAberto");
        
        criarLista(localStorage)
    })

    const criarLista = (localStorage) => {
        const itemNome = document.createElement("li");
        const itemFunil = document.createElement("li");
        const itemCampanha = document.createElement("li");
        const itemEmail = document.createElement("li");

        itemNome.className = "itens";
        itemFunil.className = "itens";
        itemCampanha.className = "itens";
        itemEmail.className = "itens";

        itemNome.textContent = "Nome: " + localStorage.nome;
        itemFunil.textContent = "Funil: " + localStorage.funil;
        itemCampanha.textContent = "Campanha: " + localStorage.campanha;
        itemEmail.textContent = "Email: " + localStorage.email;

        lista.appendChild(itemNome);
        lista.appendChild(itemFunil);
        lista.appendChild(itemCampanha);
        lista.appendChild(itemEmail);
    }
}
// 1 - Login


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

        // let dadosLocais = JSON.stringify(localStorage);
        // console.log(dadosLocais)
    
        const getDados = JSON.stringify(localStorage);
        console.log("getDados stringy", getDados)

        // getDados.forEach((item) => {
        //     criarLista(item);
        // });

        
    })

    const criarLista = (text) => {
        const itemLista = document.createElement("li");
        itemLista.className = "itens";

        itemLista.innerHTML = text;
        lista.appendChild(itemLista);
    }
    

    
}
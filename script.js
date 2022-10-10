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


const cadastroOportunidade = () => {
    const formulario = document.getElementById("cadastro");

    return console.log(formulario.value);
}
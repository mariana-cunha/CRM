let modal = document.querySelector(".modal");
let botaoAbrir = document.querySelector(".trigger");
let botaoFechar = document.querySelector(".botaoFechar")

// console.log("modal", modal)
// console.log("abrir", botaoAbrir)
// console.log("fechar", botaoFechar)

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
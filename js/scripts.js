const modal = document.querySelector("#modal");
const abrirmodal = document.querySelector("#abrirmodal");
const addcarrinho = document.querySelector("#addcart1");

const togglemodal = () => modal.classList.toggle("hide");

abrirmodal.addEventListener("click", togglemodal);


// começando o código para adicionar os itens no modal

const lista = document.getElementById("listacart");


addcarrinho.addEventListener("click", function(e) {
    e.stopPropagation();
    adicionarnocarrinho(e);
});

function adicionarnocarrinho(e) {

const nome = e.target.dataset.name;
const img = e.target.dataset.img;

const texto = document.createElement("span");
const item = document.createElement("li");
const delet = document.createElement("button");
const add = document.createElement("button");

texto.textContent = nome;
add.textContent = "+";
delet.textContent = "-";

// nessa parte eu pego a nova lista criada, que vai ser o item, e jogo dentro do elemento Ul, no caso... "item" vai entrar no listacart 
item.appendChild(texto);
item.appendChild(add);
item.appendChild(delet);
listacart.appendChild(item);


// vou deixar esse comentado só pra caso eu precise usar em algum momento, mas eu só uso isso pra zerar um input caso eu precise... tarefa era o input e .value = "" faz ele zerar o valor 
// document.querySelector("#tarefa").value = "";
}
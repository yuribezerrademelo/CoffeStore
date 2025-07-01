const modal = document.querySelector("#modal");
const abrirmodal = document.querySelector("#abrirmodal");
const addcarrinho = document.querySelector("#addcart1");
const cafelatte = document.querySelector(".cafelatte");

const togglemodal = () => modal.classList.toggle("hide");

abrirmodal.addEventListener("click", togglemodal);


// começando o código para adicionar os itens no modal

const lista = document.getElementById("listacart");

function adicionarnocarrinho() {
// aqui é eu pegando o valor do + em teoria, a ideia é que o + vai  

// aqui eu crio os elementos que irão ficar dentro da minha lista, e o botão de adicionar/deletar
const item = document.createElement("li");
const add = document.createElement("button");
const delet = document.createElement("button");

// nessa parte eu pego a nova lista criada, que vai ser o item, e jogo dentro do elemento Ul, no caso... "item" vai entrar no listacart 
listacart.appendChild(item);


// vou deixar esse comentado só pra caso eu precise usar em algum momento, mas eu só uso isso pra zerar um input caso eu precise... tarefa era o input e .value = "" faz ele zerar o valor 
// document.querySelector("#tarefa").value = "";
}
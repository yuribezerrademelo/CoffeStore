const modal = document.querySelector("#modal")
const abrirmodal = document.querySelector("#abrirmodal")

const togglemodal = () => modal.classList.toggle("hide");

abrirmodal.addEventListener("click", togglemodal);
const botao = document.getElementById("meuBotao")
const texto = document.getElementById("meuTexto")

botao.addEventListener("click", function(){
    texto.classList.toggle("oculto");
})
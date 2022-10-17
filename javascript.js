let prato, bebida, sobremesa;
let soma = 0;

function pratoselecionado(pratomarcado) {
    const sel = document.querySelector(".opcoes");
    if (prato!== null){
        pratomarcado.classList.remove("bordaverde");
    }
    pratomarcado.classList.add("bordaverde");
    const seta = document.querySelector(".pratos .bordaverde .ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");
}

function bebidaselecionada(bebidamarcado) {
    const sel = document.querySelector(".opcoes");
    bebidamarcado.classList.add("bordaverde");
    const seta = document.querySelector(".bebidas .bordaverde .ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");

}
function sobremesaselecionada(sobremesamarcado) {
    const sel = document.querySelector(".opcoes");
    sobremesamarcado.classList.add("bordaverde");
    const seta = document.querySelector(".sobremesas .bordaverde .ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");

}
function finalizar(bot) {
    /*if ((prato !== null) && (bebida !== null) && (sobremesa != null)) {*/
    bot.innerHTML = "Fechar pedido"
    bot.classList.remove("botao");
    bot.classList.add("botaook");
    bot.classList.add(onclick = "teste();");
    /*}*/
}
function teste() {
    alert('hello!');
}
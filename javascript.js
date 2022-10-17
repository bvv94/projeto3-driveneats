let prato, bebida, sobremesa = null;
let soma = 0;

function pratoselecionado(pratomarcado) {

    const selprimeiro = document.querySelector(".opcoes");

    if (selprimeiro !== null) {
        selprimeiro.classList.remove(".bordaverde");
    }

    const sel = document.querySelector('.opcoes');

    pratomarcado.classList.add("bordaverde");
    const seta = document.querySelector(".pratos .bordaverde .ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");
    /*show de bola até aqui*/
    let aux = document.querySelector(".bordaverde .nomeopcao");
    prato = aux.innerHTML;

}

function bebidaselecionada(bebidamarcado) {
    const sel = document.querySelector(".opcoes");
    bebidamarcado.classList.add("bordaverde");
    const seta = document.querySelector(".bebidas .bordaverde .ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");

    let aux = document.querySelector(".bordaverde .nomeopcao");
    bebida = aux.innerHTML;

}
function sobremesaselecionada(sobremesamarcado) {
    const sel = document.querySelector(".opcoes");
    sobremesamarcado.classList.add("bordaverde");
    const seta = document.querySelector(".sobremesas .bordaverde .ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");

    let aux = document.querySelector(".bordaverde .nomeopcao");
    sobremesa = aux.innerHTML;

}
function finalizar(bot) {
    /*if ((prato !== null) && (bebida !== null) && (sobremesa != null)) {*/
    bot.innerHTML = "Fechar pedido"
    bot.classList.remove("botao");
    bot.classList.add("botaook");
    /*}*/
}

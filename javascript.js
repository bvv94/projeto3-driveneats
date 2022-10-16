let prato;
let bebida;
let sobremesa;

function pratoselecionado(pratomarcado){
    const sel = document.querySelector(".opcoes");
    pratomarcado.classList.add ("bordaverde");
    const seta = document.querySelector(".ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");
    prato = document.querySelector("nomeopcao");
    alert(prato);
    
}
function bebidaselecionada(bebidamarcado){
    const sel = document.querySelector(".opcoes");
    bebidamarcado.classList.add ("bordaverde");
    const seta = document.querySelector(".ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");
    
}
function sobremesaselecionada(sobremesamarcado){
    const sel = document.querySelector(".opcoes");
    sobremesamarcado.classList.add ("bordaverde");
    const seta = document.querySelector(".ok");
    seta.classList.remove("ok");
    seta.classList.add("okgreen");
    
}
function finalizar(bot){
    bot.classList.remove ("botao");
    bot.classList.add ("botaook");
    
}
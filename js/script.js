


function mostrarMenu() {

    let menu = document.getElementById("menu");

    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none";

    } else {
        menu.style.display = "flex";
    }
}


function mostraPopUp() {

    window.alert("Aproveite Nossas Promoções!!!")
}


function cadastrarEmail() {

    let emailDigitado = document.getElementById("exampleInputEmail1").value
    let senhaDigitada = document.getElementById("exampleInputPassword1").value

    console.log(emailDigitado, senhaDigitada);
}
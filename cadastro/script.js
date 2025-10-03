let user_type = "";
function goToLogin(pag1, pag2) {
    for (let i in pag1.children) {
        if (typeof pag1.children[i] == "object" && pag1.children[i].classList.contains("fadeout")) {
            let el = pag1.children[i];
            el.classList.add("invisible"); // Transiciona e apaga os elementos
            el.addEventListener("transitionend", () => {
                el.style.display = "none"; // Torna invisível após a transição
            });
        }
    }
    pag2.classList.add("visible"); // Adiciona a classe para visualizar a transição
};

document.addEventListener("DOMContentLoaded", function () {
    let btnCliente = document.getElementsByClassName("btn_cliente");
    let btnVendedor = document.getElementsByClassName("btn_vendedor");

    let right_article = document.getElementsByClassName("preForm")[0];
    let form_login = document.querySelector("form");

    btnCliente[0].onclick = function () {
        user_type = "cliente";
        goToLogin(right_article, form_login);
    }

    btnVendedor[0].onclick = function () {
        user_type = "vendedor";
        goToLogin(right_article, form_login);
    }
});
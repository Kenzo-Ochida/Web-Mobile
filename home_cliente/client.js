document.addEventListener("DOMContentLoaded", function () {
    let logout = document.getElementsByClassName("logout_btn")[0];
    logout.onclick = function () {
        if (confirm("Deseja realmente sair?")) {
            window.location.href = "../cadastro/index.html";
        }
    }

    let productCards = document.getElementsByClassName("cards");
    for(let i=0; i<productCards.length; i++){
        let buyText = productCards[i].getElementsByClassName("buy_text")[0];
        let plusBtn = productCards[i].getElementsByClassName("plus_btn")[0];
        let minusBtn = productCards[i].getElementsByClassName("minus_btn")[0];
        let quantity = 0;

        function updateBuyBtn() {
            if (buyText) {
                buyText.innerText = quantity == 0 ? "Comprar" : quantity;
            }
        }

        plusBtn.onclick = () => {
            console.log(plusBtn)
            if (quantity < 10) {
                quantity++;
                updateBuyBtn();
            }
        };
        plusBtn.style.display = "";

        minusBtn.onclick = () => {
            if (quantity > 0) {
                quantity--;
                updateBuyBtn();
            }
        };

        updateBuyBtn();
    };
});
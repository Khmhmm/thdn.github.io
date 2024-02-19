function showModal(text, onclCb) {
    let modalDiv = document.querySelector("#modal");
    modalDiv.children[0].textContent = text
    modalDiv.children[1].onclick = onclCb;
}

function removeModal() {
    let mdl = document.querySelector(".modal");
    mdl.remove();
    document.querySelectorAll(".blur")
        .forEach(function(el) { el.classList.remove("blur"); })
    ;
}

showModal("Everyone is gone.", function() {
    showModal("You are alone.", function() {
        showModal("But I have to ask anyway. \nWould you accept the world without anyone you will love?", function() { removeModal(); });
    });
});

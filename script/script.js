const toggleButton = document.getElementById("bouton_menu");
const menu = document.getElementById("liste");

toggleButton.addEventListener("click", function() {
    // Affiche ou masque le menu
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        menu.classList.add("highlight"); // Ajoute la classe de mise en évidence
    } else {
        menu.style.display = "none";
        menu.classList.remove("highlight"); // Retire la classe de mise en évidence
    }
});
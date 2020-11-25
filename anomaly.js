const mainMenu = document.querySelector(".main-Menu");
const container = document.querySelector(".container");

mainMenu.addEventListener("click", () => {
    container.classList.toggle("active");
});

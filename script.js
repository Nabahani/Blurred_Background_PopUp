const mainContainerEL = document.querySelector(".main-container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEL = document.querySelector(".close-icon");


btnEl.addEventListener("click", () => {
    mainContainerEL.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEL.addEventListener("click", () => {
    mainContainerEL.classList.remove("active");
    popupContainerEl.classList.add("active");
})
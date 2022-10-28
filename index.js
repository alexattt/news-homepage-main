const navShow = () => {
  const burgerIcon = document.querySelector("#open-menu-btn");
  const closeIcon = document.querySelector("#close-menu-btn");
  const nav = document.querySelector("#mobile-menu-items");

  burgerIcon.addEventListener("click", () => {
    nav.classList.remove("hidden");
    closeIcon.classList.remove("hidden");
    burgerIcon.classList.add("hidden");
  });

  closeIcon.addEventListener("click", () => {
    nav.classList.add("hidden");
    closeIcon.classList.add("hidden");
    burgerIcon.classList.remove("hidden");
  });
};

navShow();

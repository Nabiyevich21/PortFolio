const navAnimation = () => {
  const navBurgers = document.querySelector(".burger");
  const navList = document.querySelector(".navbar__list");
  navBurgers.addEventListener("click", () => {
    navBurgers.classList.toggle("is-active");
    navList.classList.toggle("is-active");
    navBurgers.classList.toggle("no-scroll");
  });
};
navAnimation();

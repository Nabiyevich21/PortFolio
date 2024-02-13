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

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: Infinity,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

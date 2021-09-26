const openNavPanel = () => {
  gsap.from("nav.active", { height: 0, duration: 1 });
};

const handleHamburger = () => {
  const hamburger = document.querySelector(".hamburger");
  const navPanel = document.querySelector("nav");
  let panelOpen = false;
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navPanel.classList.toggle("active");
    if (panelOpen == false) {
      openNavPanel();
    }
    panelOpen = !panelOpen;
  });
};
AOS.init({
  duration: 1000,
});
handleHamburger();
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    cover: true,
    heightRatio: 0.4,
    autoplay: true,
    duration: 1500,
    rewind: true,
    pauseOnHover: false,
  }).mount();
});

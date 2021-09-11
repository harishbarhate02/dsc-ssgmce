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

handleHamburger();

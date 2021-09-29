function insertHeaderComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <header class="header">
    <div class="header__container">
      <a class="logo-go-home" href="./index.html">
        <img class="header__logo" src="./images/logo-eze.svg" alt="Ezequiel Grandía Logo">
      </a>
      <div class="burger-menu">
        <div class="burger-menu__line"></div>
        <div class="burger-menu__line"></div>
        <div class="burger-menu__line"></div>
      </div>
      <nav class="navigation-card">
        <div class="navigation-card__anchors-container">
          <a href="./portfolio.html" class="navigation-card__page-anchor">Portfolio</a>
          <a href="./servicios.html" class="navigation-card__page-anchor">Servicios</a>
          <a href="./contacto.html" class="navigation-card__page-anchor">Contacto</a>
        </div>
        <div class="navigation-card__close-window-container">
          <img class="navigation-card__close-window" src="./images/close-window-vector.svg">
        </div>
      </nav>
    </div>
</header>
  `;

  const burgerMenuEl = componentEl.querySelector(".burger-menu");
  const navigationCardEl = componentEl.querySelector(".navigation-card");
  const closeWindowEl = componentEl.querySelector(
    ".navigation-card__close-window"
  );
  burgerMenuEl.addEventListener("click", () => {
    navigationCardEl.style.display = "flex";
    navigationCardEl.style.alignItems = "center";
    navigationCardEl.style.justifyContent = "center";
  });

  closeWindowEl.addEventListener("click", () => {
    navigationCardEl.style.display = "none";
  });

  el.appendChild(componentEl);
}

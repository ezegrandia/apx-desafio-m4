function insertFooterComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <footer class="footer">
  <a class="footer__logo-container" href="./index.html">
    <img class="footer__logo" src="./images/logo-eze.svg" alt="Ezequiel Grandía Logo">
  </a>
  <div class="footer__social-medias-container">
    <a class="footer__social-media" href="https://www.instagram.com/ezegrandia/" target="_blank">
      <p class="footer__social-media-text paragraph">Instagram</p>
      <img class="footer__social-media-logo" src="./images/instagram.svg" alt="Logo de Instagram">
    </a>
    <a class="footer__social-media" href="https://www.linkedin.com/in/ezegrandia/" target="_blank">
      <p class="footer__social-media-text paragraph">Linkedin</p>
      <img class="footer__social-media-logo" src="./images/linkedin.svg" alt="Logo de Linkedin">
    </a>
    <a class="footer__social-media" href="https://github.com/ezegrandia" target="_blank">
      <p class="footer__social-media-text paragraph">Github</p>
      <img class="footer__social-media-logo" src="./images/github.svg" alt="Logo de Github">
    </a>
  </div>
</footer>
  `;

  el.appendChild(componentEl);
}

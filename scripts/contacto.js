function main() {
  const headerContainerEl = document.querySelector(
    ".header-component-container"
  );
  insertHeaderComponent(headerContainerEl);

  const formContainerEl = document.querySelector(".form-component-container");
  insertFormComponent(formContainerEl);

  const footerContainerEl = document.querySelector(
    ".footer-component-container"
  );
  insertFooterComponent(footerContainerEl);

  const formTitleEl = document.querySelector(".form__title");
  formTitleEl.textContent = "Contacto";

  sendFormInfo();
  showLabelsFormEls();
}

main();

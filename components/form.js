function showLabels() {
  const inputEl = document.querySelectorAll(".input");

  inputEl.forEach((input, i) => {
    input.addEventListener("click", (e) => {
      const inputEventEl = e.path[0];
      var inputEventLabelEl = e.path[1].firstElementChild;

      if (inputEventEl.placeholder == "Nombre") {
        placeholderValue = "Nombre";
        inputEventLabelEl.textContent = "NOMBRE";
        inputEventEl.placeholder = "";
      } else if (inputEventEl.placeholder == "Email") {
        placeholderValue = "Email";
        inputEventLabelEl.textContent = "EMAIL";
        inputEventEl.placeholder = "";
      } else if (inputEventEl.placeholder == "Mensaje") {
        placeholderValue = "Mensaje";
        inputEventLabelEl.textContent = "MENSAJE";
        inputEventEl.placeholder = "";
      }
    });
  });
}

showLabels();

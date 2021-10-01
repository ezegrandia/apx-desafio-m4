function insertFormComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <form class="form">
  <a class="form__title-container" href="./contacto.html">
    <h2 class="form__title subtitle">Escribime</h2>
  </a>
  <div class="form__fieldsets-container">
    <fieldset class="form__fieldset">
      <label class="form__label">
        <p class="form__label-text"></p>
        <input class="form__input input" type="text" required="required" placeholder="Nombre" name="nombre">
      </label>
    </fieldset>
    <fieldset class="form__fieldset">
      <label class="form__label">
        <p class="form__label-text"></p>
        <input class="form__input input" type="email" required="required" placeholder="Email" name="email">
      </label>
    </fieldset>
    <fieldset class="form__fieldset">
      <label class="form__label">
        <p class="form__label-text"></p>
        <textarea class="form__textarea input" required="required" placeholder="Mensaje" name="mensaje"></textarea>
      </label>
    </fieldset>
    <div class="form__submit-button-container"></div>
    <button class="form__submit-button" type="submit">Enviar</button>
  </div>
</form>
  `;

  el.appendChild(componentEl);
}

function sendFormInfo() {
  const formEl = document.querySelector(".form");

  formEl.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const formData = new FormData(evento.target);
    const datosObj = Object.fromEntries(formData.entries());

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },

      body: JSON.stringify({
        to: "ezequielgrandia@gmail.com",
        message: `
        Nombre: ${datosObj.nombre} <br> <br>
        Email: ${datosObj.email} <br> <br>
        Mensaje: ${datosObj.mensaje}
        `,
      }),
    });
    formEl.reset();
    alert(
      "Mensaje enviado correctamente, Gracias " +
        datosObj.nombre +
        " por comunicarte."
    );
  });
}

function showLabelsFormEls() {
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

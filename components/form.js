function mostrarForm(params) {
  const formJs = document.createElement("div");

  formJs.innerHTML = `
    <section class="form">
        <div class="form__formulario-h2-caja">
            <h2 class="form__formulario-h2">Escribime</h2>
        </div>
        <div class="form__formulario-caja">

            <form class="form__formulario">
                <div class="form__formulario-fieldsets">
                    <div class="form__formulario-fieldset">
                        <label class="form__formulario-label">Nombre</label>
                        <input class="form__formulario-input" type="text" name='nombre'>
                    </div>
                    <div class="form__formulario-fieldset">
                        <label class="form__formulario-label">Email</label>
                        <input class="form__formulario-input" type="email" name='email'>
                    </div>
                    <div class="form__formulario-fieldset">
                        <label class="form__formulario-label">Mensaje</label>
                        <textarea class="form__formulario-textarea" name='mensaje'></textarea>
                    </div>
                    <div class="boton">
        
                        <button class="form__formulario-button">Enviar</button>
                    </div>
                    
                </div>
            </form>

        </div>
    </section>
      `;

  params.appendChild(formJs);

  const formEl = document.querySelector(".form__formulario");
  sendForm(formEl);
}

function sendForm(params) {
  params.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    const objeto = Object.fromEntries(formData.entries());

    console.log("objeto: ", objeto);

    const message = `
        User: ${objeto.nombre} <br> <br>
        Email: ${objeto.email} <br> <br>
        Message: ${objeto.mensaje}
      `;

    const url = "https://apx-api.vercel.app/api/utils/dwf";

    fetch(
      url,

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        method: "POST",

        body: JSON.stringify({
          to: "eugeniolgimenez@gmail.com",
          message: message,
        }),
      }
    ).then(() => {
      alert(
        "Mensaje enviado. Gracias " +
          objeto.nombre +
          " por cominucarte! Responderé a la brevedad :)."
      );
    });
  });
}

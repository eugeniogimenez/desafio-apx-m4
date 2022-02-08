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
                        <input class="form__formulario-input" type="text">
                    </div>
                    <div class="form__formulario-fieldset">
                        <label class="form__formulario-label">Email</label>
                        <input class="form__formulario-input" type="email">
                    </div>
                    <div class="form__formulario-fieldset">
                        <label class="form__formulario-label">Mensaje</label>
                        <textarea class="form__formulario-textarea"></textarea>
                    </div>
                    <div class="boton">
        
                        <button class="form__formulario-button">Enviar</button>
                    </div>
                    
                </div>
            </form>
        </div>
    </section>
      `;

  const formu = formJs.querySelector(".form");
  
  formu.addEventListener('submit', (e)=>{
        e.preventDefault();
        console.log('Se envió información del formulario');
  })
  
  params.appendChild(formJs);
}

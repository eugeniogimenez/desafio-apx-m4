function mostrarHeader(params) {
  const headerJs = document.createElement("div");

  headerJs.innerHTML = `
    <section class="bienvenida">

    <!-- menu hamburguesa -->
    <div class="menu-hamburguesa">
        <div class="menu-hamburguesa__container">
            <div class="img">
                <img class="menu-hamburguesa__x" src='img/X.png'>
            </div>
            <div class="menu-hamburguesa__contenido">
                <ul style="list-style: none">
                    <li class="menu_hamburguesa__li">Porfolio</li>
                    <li class="menu_hamburguesa__li">Servicios</li>
                    <li class="menu_hamburguesa__li">Contacto</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- menu hamburguesa -->

    <header class="bienvenida__header">
        <h2 class="bienvenida__header-logo">EUGENIO</h2>   
        <img src="img/hamburguesa.png" class="bienvenida__header-menu">
        <div class="bienvenida__barra-lateral">
            <ul class="bienvenida__barra-lateral-ul" style="list-style: none">
                <li class="bienvenida__barra-lateral-li">Portfolio</li>
                <li class="bienvenida__barra-lateral-li">Servicios</li>
                <li class="bienvenida__barra-lateral-li">Contacto</li>
            </ul>
        </div>
    </header>
    
    
</section>
    `;

  const abrirMenu = headerJs.querySelector(".bienvenida__header-menu");
  const menu = headerJs.querySelector(".menu-hamburguesa");
  const cerrarMenu = headerJs.querySelector(".menu-hamburguesa__x");

  abrirMenu.addEventListener("click", () => {
    menu.style.display = "inherit";
  });
  cerrarMenu.addEventListener("click", () => {
    menu.style.display = "";
  });

  params.appendChild(headerJs);
}

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
                <nav class="menu__hamburguesa-nav">
                    <a class="menu_hamburguesa__li" href="portfolio.html">Portafolio</a>
                    <a class="menu_hamburguesa__li" href="servicios.html">Servicios</a>
                    <a class="menu_hamburguesa__li" href="contacto.html">Contacto</a>
                </nav>
            </div>
        </div>
    </div>
    <!-- menu hamburguesa -->

    <header class="bienvenida__header">
        <a class="bienvenida__header-logo" href="index.html">EUGENIO</a>   
        <img src="img/hamburguesa.png" class="bienvenida__header-menu">
        
        <div class="bienvenida__barra-lateral">
                
            <nav class="bienvenida__barra-lateral-ul">
                <a class="bienvenida__barra-lateral-a" href="portfolio.html">Portafolio</a>
                <a class="bienvenida__barra-lateral-a" href="servicios.html">Servicios</a>
                <a class="bienvenida__barra-lateral-a" href="contacto.html">Contacto</a>
            </nav>
        </div>
    </header>

    <div class="bienvenida__saludo"></div>
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

function mostrarFooter(params) {
  const footerJs = document.createElement("div");

  footerJs.innerHTML = `
    <section class="footer">
        <div class="footer__marca">
            <h2 class="footer__marca-h2">EUGENIO</h2>
        </div>
        <div class="footer__redes">
            <div class="footer__redes-caja">
                <h3 class="footer__redes-h3">Instagram</h3>
                <img class="footer__redes-img" src="img/instagram.png">
            </div>
            <div class="footer__redes-caja">
                <h3 class="footer__redes-h3">Linkedin</h3>
                <img class="footer__redes-img" src="img/linkedin.png">
            </div>
            <div class="footer__redes-caja">
                <h3 class="footer__redes-h3">Github</h3>
                <img class="footer__redes-img" src="img/github.png">
            </div>
        </div>
    </section>
        `;

  params.appendChild(footerJs);
}

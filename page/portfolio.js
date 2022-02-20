function addTemplatePortfolio(params = {}) {
  const templatePortfolio = document.querySelector("#portfolio");
  const mostrarPresentacion = document.querySelector(".portfolio__container");

  templatePortfolio.content.querySelector(
    ".portfolio__card-title"
  ).textContent = params.title;
  templatePortfolio.content.querySelector(".portfolio__card-p").textContent =
    params.des;
  templatePortfolio.content.querySelector(".portfolio__link").href = params.url;

  templatePortfolio.content.querySelector(".portfolio__img").src =
    "http:" + params.image;

  const clone = document.importNode(templatePortfolio.content, true);

  mostrarPresentacion.appendChild(clone);
}

function getContenfulDataPortfolio() {
  const url =
    "https://cdn.contentful.com/spaces/jls7992kr8bc/environments/master/entries?access_token=y9NaT4lwQXPid1jjCzyCBNVL8rxnNJaaPNi36MPV9XU&content_type=dm4Portfolio";

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log("Portfolio: ", json);
      const collection = json.items.map((i) => {
        const imageId = i.fields.image.sys.id;
        const image = getImgP(imageId, json);

        return {
          title: i.fields.title,
          des: i.fields.des,
          url: i.fields.url,
          image: image.fields.file.url,
        };
      });

      return collection;
    });
}

function getImgP(imageId, json) {
  return json.includes.Asset.find((i) => {
    return i.sys.id == imageId;
  });
}

function main() {
  getContenfulDataPortfolio().then((portfolio) => {
    for (const i of portfolio) {
      addTemplatePortfolio(i);
    }
  });

  const headerEl = document.querySelector(".componente_header");
  const footerEl = document.querySelector(".componente_footer");

  mostrarHeader(headerEl);
  mostrarFooter(footerEl);
}

main();

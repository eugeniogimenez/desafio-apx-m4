function addTemplateServices(params = {}) {
  const templateServices = document.querySelector("#serviciosT");
  const mostrarServices = document.querySelector(".mis-servicios__content");

  templateServices.content.querySelector(
    ".mis-servicios__content-caja-h3"
  ).textContent = params.title;
  templateServices.content.querySelector(
    ".mis-servicios__content-caja-p"
  ).textContent = params.description;

  templateServices.content.querySelector(".mis-servicios__content-caja-img").src =
    "http:" + params.image;

  const clone = document.importNode(templateServices.content, true);

  mostrarServices.appendChild(clone);
}

function getContenfulDataServices() {
  const url =
    "https://cdn.contentful.com/spaces/jls7992kr8bc/environments/master/entries?access_token=y9NaT4lwQXPid1jjCzyCBNVL8rxnNJaaPNi36MPV9XU&content_type=dm4Servicios";

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log("Servicios: ", json);
      const collection = json.items.map((i) => {
        const imageId = i.fields.image.sys.id;
        const image = getImgP(imageId, json);

        return {
          title: i.fields.title,
          description: i.fields.descripcion,
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
  getContenfulDataServices().then((services) => {
    for (const i of services) {
      addTemplateServices(i);
    }
  });

  // const headerEl = document.querySelector(".componente_header");
  // const footerEl = document.querySelector(".componente_footer");

  // mostrarHeader(headerEl);
  // mostrarFooter(footerEl);
}

main();

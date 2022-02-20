function addTemplatePresent(params = {}) {
    const templatePresentacion = document.querySelector("#presentacionT");
    const mostrarPresentacion = document.querySelector(".presentacion");

    templatePresentacion.content.querySelector(".presentacion__content-title").textContent = params.title;
    templatePresentacion.content.querySelector(".presentacion__content-text").textContent = params.description;

    const clone = document.importNode(templatePresentacion.content, true);

    mostrarPresentacion.appendChild(clone);
}

function getContenfulDataPresent() {

    const url = 'https://cdn.contentful.com/spaces/jls7992kr8bc/environments/master/entries?access_token=y9NaT4lwQXPid1jjCzyCBNVL8rxnNJaaPNi36MPV9XU&content_type=dm4Presentacion'

    return fetch(url)
            .then(res => {return res.json()})
            .then(json => {
                console.log('Presentacion: ', json);
                const collection = json.items.map(i => {
                    return {
                        title: i.fields.title,
                        description: i.fields.description,
                    }
                })

                return collection
            })
}

function main() {
  getContenfulDataPresent()
        .then(presentacion => {
            for (const i of presentacion) {
                addTemplatePresent(i)
            }
        })  
}

main()  
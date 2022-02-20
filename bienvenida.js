function addTemplate(params = {}) {
    const templateBienvenida = document.querySelector("#bienvenidaT");
    const mostrarBienvenida = document.querySelector(".bienvenida__saludo");

    templateBienvenida.content.querySelector(".bienvenida__saludo-content-h2").textContent = params.title;
    templateBienvenida.content.querySelector(".bienvenida__saludo-content-p").textContent = params.description;

    const clone = document.importNode(templateBienvenida.content, true);

    mostrarBienvenida.appendChild(clone);
}

function getContentfulData() {

    const url = 'https://cdn.contentful.com/spaces/jls7992kr8bc/environments/master/entries?access_token=y9NaT4lwQXPid1jjCzyCBNVL8rxnNJaaPNi36MPV9XU&content_type=dm4Bienvenida'

    return fetch(url)
            .then(res => {return res.json()})
            .then(json => {
                console.log('Bienvenida: ', json);
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
  getContentfulData()
        .then(bienvenida => {
            for (const i of bienvenida) {
                addTemplate(i)
            }
        })  
}

main()  

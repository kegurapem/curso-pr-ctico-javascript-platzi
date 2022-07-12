//RECOMENDABLE TRABAJAR CON DYNAMIC IMPORT

// dynamic import
const button = document.getElementById("btn");

//addEventListener() escucha cualquier accion que se realiza sobre el boton
button.addEventListener("click", async function () {
    const module = await import("./file.js")
    module.hello();
});


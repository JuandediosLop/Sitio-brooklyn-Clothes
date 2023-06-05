//Necesito que al presionar el div id="Ofertas", se muestre el div id="Ofertas2" haciendo animacion de correr hacia la izquierda con javascript


let ofertas = document.getElementById("ofertas");
let ofertas2 = document.getElementById("ofertas2");
const mediaQuery = window.matchMedia('(max-width: 767px)');


ofertas.addEventListener("click", function () {
    //agregar al id ofertas2 en el css el display: block, antes validae que este en none, y que ocupe el height y width de ofertas
    if (ofertas2.style.display === "block") {
        ofertas2.style.display = "none";
        ofertas.style.right = "0";
    } else {
        ofertas2.style.display = "block";
        ofertas2.style.height = ofertas.offsetHeight + "px";

        mediaQuery.addListener((mq) => {
            // Si la pantalla tiene un ancho máximo, cambiar el ancho del elemento
            if (mq.matches) {
                ofertas2.style.width = '80%';
                ofertas.style.right = "80%";
            } else {
                ofertas2.style.width = '30%';
                ofertas.style.right = "30%";
            }
        });

        // Ejecutar la consulta de medios al cargar la página
        if (mediaQuery.matches) {
            ofertas2.style.width = '80%';
            ofertas.style.right = "80%";
        } else {
            ofertas2.style.width = '30%';
            ofertas.style.right = "30%";
        }
    }

})


//proceso que este todo el tiempo escuchando la pantalla y si ofertas2 esta en none, que al hacer resize se mantenga el width y height de ofertas2
window.addEventListener("resize", function () {
    if (ofertas2.style.display === "none") {
        ofertas.style.right = "0";
    }
})

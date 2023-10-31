/*buscador*/

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('buscador');
    const searchButton = document.getElementById('busqueda');
    const searchResults = document.getElementById('resultado'); 


/*Obejetos de productos*/

const productos = 
[
    {
        nombre: "Arcade xmen",
        precio: 270,
        pagina: "pages/productos/arcade1.html",
    },

    {
        nombre: "auriculares sony",
        precio: 70,
        pagina: "pages/productos/as.html",
    },
    {
        nombre: "auriculares logitech",
        precio: 30,
        pagina: "pages/productos/auris.html",
    },
    {
        nombre: "auriculares xbox",
        precio: 50,
        pagina: "pages/productos/ax.html",
    },
    {
        nombre: "cooler",
        precio: 80, 
        pagina: "pages/productos/cooler.html",
    },
    {
        nombre: "control play 5",
        precio: 100, 
        pagina: "pages/productos/cp.html",
    },
    {
        nombre: "control play 4",
        precio: 60, 
        pagina: "pages/productos/cp4.html",
    },
    {
        nombre: "cpu",
        precio: 550, 
        pagina: "pages/productos/cpu.html",
    },
    {
        nombre: "control xbox",
        precio: 80, 
        pagina: "pages/productos/cx.html",
    },
    {
        nombre: "control xbox azul",
        precio: 100, 
        pagina: "pages/productos/cxb.html",
    },
    {
        nombre: "fuente",
        precio: 90,
        pagina: "pages/productos/fuente.html",
    },
    {
        nombre: "gabinete1",
        precio: 50, 
        pagina: "pages/productos/gabinete1.html",
    },
    {
        nombre: "gabinete2",
        precio: 70, 
        pagina: "pages/productos/gabinete2.html",
    },
    {
        nombre: "tarjeta grafica",
        precio: 400, 
        pagina: "pages/productos/gpu.html",
    },
    {
        nombre: "assasins creed",
        precio: 40, 
        pagina: "pages/productos/juego1.html",
    },
    {
        nombre: "fifa",
        precio: 40, 
        pagina: "pages/productos/juego2.html",
    },
    {
        nombre: "hallo",
        precio: 40, 
        pagina: "pages/productos/juego3.html",
    },
    {
        nombre: "call of duty",
        precio: 40, 
        pagina: "pages/productos/juego4.html",
    },
    {
        nombre: "spider man",
        precio: 40, 
        pagina: "pages/productos/juego5.html",
    },
    {
        nombre: "god of war",
        precio: 40, 
        pagina: "pages/productos/juego6.html",
    },
    {
        nombre: "nintendo 64",
        precio: 250, 
        pagina: "pages/productos/n64.html",
    },
    {
        nombre: "nintendo entretaiment sistem",
        precio: 200, 
        pagina: "pages/productos/nes.html",
    },
    {
        nombre: "pc1",
        precio: 1300, 
        pagina: "pages/productos/pc1.html",
    },
    {
        nombre: "pc2",
        precio: 1250,
        pagina: "pages/productos/pc2.html",
    },
    {
        nombre: "pc3",
        precio: 1650, 
        pagina: "pages/productos/pc3.html",
    },
    {
        nombre: "pc4",
        precio: 1100, 
        pagina: "pages/productos/pc4.html",
    },
    {
        nombre: "placa",
        precio: 100, 
        pagina: "pages/productos/placa.html",
    },
    {
        nombre: "play 4",
        precio: 300, 
        pagina: "pages/productos/play4.html",
    },
    {
        nombre: "play 5",
        precio: 700, 
        pagina: "pages/productos/play5.html",
    },
    {
        nombre: "memoria ram",
        precio: 40, 
        pagina: "pages/productos/ram.html",
    },
    {
        nombre: "memoria disco solido",
        precio: 100, 
        pagina: "pages/productos/ssd.html",
    },
    {
        nombre: "volante sony",
        precio: 120, 
        pagina: "pages/productos/vp.html",
    },
    {
        nombre: "volante xbox",
        precio: 90, 
        pagina: "pages/productos/vx.html",
    },
    {
        nombre: "xbox srie s",
        precio: 400, 
        pagina: "pages/productos/xboxs.html",
    },
    {
        nombre: "xbox serie x",
        precio: 500, 
        pagina: "pages/productos/xboxx.html",
    },
];

searchButton.addEventListener("click", function () {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(query)
    );
    displayResults(filteredProducts);
});

function displayResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
        alert("No se encontraron resultados");
    } else {
        results.forEach(result => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${result.pagina}">${result.nombre}</a>, Precio: $${result.precio}`;
            searchResults.appendChild(listItem);
        });
    }
}
});
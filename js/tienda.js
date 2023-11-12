const card = document.getElementById("cards");

fetch("../productos.json")
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(x => {
            const div = document.createElement("div");
            div.innerHTML = ` 
                            <h4 class="textoCard">${x.nombre}</h4>
                            <img src="${x.imag}" alt="img de producto">
                            <p>${x.precio}</p>
                            <button>Añadir al carrito</button>
                            `
            card.append(div);
        });
    });

const card = document.getElementById("cards");

fetch("../productos.json")
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(x => {
            const div = document.createElement("div");
            div.innerHTML = ` 
                            <h4 class="textoCard">${x.nombre}</h4>
                            <p>${x.precio}</p>
                            <div class="cuadrado">Cudrado</div>
                            `
            card.append(div);
        });
    });


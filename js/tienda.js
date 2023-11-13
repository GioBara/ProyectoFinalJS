const card = document.getElementById("cards");
const carrito = [];

fetch("../productos.json")
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(x => {
            const div = document.createElement("div");
            div.innerHTML = `
                            <div class="cardsT">
                                <h4 class="tituloCard">${x.nombre}</h4>
                                <img src="${x.imag}" alt="img de producto">
                                <p class="textoCard">${x.precio}</p>
                                <button class="botonCard" id=${x.id}>Añadir al carrito</button>
                            </div>
                            `
            card.append(div);
        });
    }).then((respuesta)=>{
        
        const boton1 = document.getElementById("1");
        boton1.addEventListener("click",()=>{
            carrito.push("1");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        })

        const boton2 = document.getElementById("2");
        boton2.addEventListener("click",()=>{
            carrito.push("2");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        });

        const boton3 = document.getElementById("3");
        boton3.addEventListener("click",()=>{
            carrito.push("3");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        });

        const boton4 = document.getElementById("4");
        boton4.addEventListener("click",()=>{
            carrito.push("4");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        });

        const boton5 = document.getElementById("5");
        boton5.addEventListener("click",()=>{
            carrito.push("5");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        });

        const boton6 = document.getElementById("6");
        boton6.addEventListener("click",()=>{
            carrito.push("6");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        });

        const boton7 = document.getElementById("7");
        boton7.addEventListener("click",()=>{
            carrito.push("7");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        });

        const boton8 = document.getElementById("8");
        boton8.addEventListener("click",()=>{
            carrito.push("8");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        });

        const boton9 = document.getElementById("9");
        boton9.addEventListener("click",()=>{
            carrito.push("9");
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
        });
    })

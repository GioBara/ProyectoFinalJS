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
            carrito.push({"precio":1000, "nombre":"Sanserviera Verde"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        })

        const boton2 = document.getElementById("2");
        boton2.addEventListener("click",()=>{
            carrito.push({"precio":2000, "nombre":"Incienso"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        });

        const boton3 = document.getElementById("3");
        boton3.addEventListener("click",()=>{
            carrito.push({"precio":3000, "nombre":"Monstera"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        });

        const boton4 = document.getElementById("4");
        boton4.addEventListener("click",()=>{
            carrito.push({"precio":4000, "nombre":"Plectrantus"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        });

        const boton5 = document.getElementById("5");
        boton5.addEventListener("click",()=>{
            carrito.push({"precio":5000, "nombre":"Philodendro Peruviano"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        });

        const boton6 = document.getElementById("6");
        boton6.addEventListener("click",()=>{
            carrito.push({"precio":6000, "nombre":"Begonia Elatior"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        });

        const boton7 = document.getElementById("7");
        boton7.addEventListener("click",()=>{
            carrito.push({"precio":7000, "nombre":"Aphelandra"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        });

        const boton8 = document.getElementById("8");
        boton8.addEventListener("click",()=>{
            carrito.push({"precio":8000, "nombre":"Begonia Dragon"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        });

        const boton9 = document.getElementById("9");
        boton9.addEventListener("click",()=>{
            carrito.push({"precio":9000, "nombre":"Aralia Ivonet"});
            Toastify({
                text:"Agregado al carrito.",
                duration: 2000,
                style: {
                    background: "#a7c957",
                  }
            }).showToast();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        });
    });
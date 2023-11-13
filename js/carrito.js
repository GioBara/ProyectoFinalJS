const lista = document.getElementById("lista")
let carrito = [];

if(localStorage.getItem("carrito")!=[]){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

for(producto of carrito){
    const li = document.createElement("li");
    li.innerHTML = `
                    <div class="liContenedor">
                        <h4 class="liC">${producto.nombre}</h4>
                        <p class="liP">${producto.precio}</p>
                    </div>`
    lista.append(li);
}

if(localStorage.getItem("carrito")==[]){
    const div = document.createElement("div");
    div.innerHTML = `<h1 class="cVacio">El carrito esta vacio</h1>`
    lista.append(div)
}

const btnE = document.getElementById("del");

btnE.addEventListener("click",()=>{
    carrito = [];
    localStorage.setItem("carrito",[]);
    swal.fire({
        title:"Compra cancelada",
        text:"Vuelva pronto",
        icon:"error"
    })
})

const btnC = document.getElementById("conf");

btnC.addEventListener("click",()=>{
    carrito = [];
    localStorage.setItem("carrito",[]);
    swal.fire({
        title:"Compra confirmada",
        text:"Gracias por elegir nuestros servicios",
        icon:"success"
    })
})

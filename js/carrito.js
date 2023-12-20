const lista = document.getElementById("lista")
let carrito = [];
let cuenta = 0;

if(localStorage.getItem("carrito")!=[]){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const precios = carrito.map((el)=>(el.precio));
const total = precios.forEach((el)=>cuenta = cuenta+el);
console.log(cuenta)

for(producto of carrito){
    const li = document.createElement("li");
    li.innerHTML = `
                    <div class="liContenedor">
                        <h4 class="liC">${producto.nombre}</h4>
                        <p class="liP">${producto.precio}</p>
                    </div>`
    lista.append(li);
}

if(cuenta != 0){
    const liTotal = document.createElement("li");
    liTotal.innerHTML = `<h4>Total a pagar: ${cuenta}</h4>`
    lista.append(liTotal)
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

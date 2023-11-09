if(localStorage.getItem("modo")!="oscuro"){
    localStorage.setItem("modo","claro");
}

const btnDark = document.getElementById("darkMode");
const cuerpo = document.getElementById("bodyI");
const main = document.getElementById("mainI");
const titulo = document.getElementById("tituloI")
const nav = document.getElementById("nav");
const foot = document.getElementById("footer");

switchMode(localStorage.getItem("modo"));

btnDark.addEventListener("click", () =>{
    if(localStorage.getItem("modo")!="oscuro"){
        localStorage.setItem("modo","oscuro");
    }
    else{
        localStorage.setItem("modo","claro");
    }
    switchMode(localStorage.getItem("modo"));
});

function switchMode(mode){
    if(mode == "oscuro"){
        cuerpo.className = "bodyD";
        main.className = "mainD";
        titulo.className = "contTitulo tituloD";
        nav.className = "navbar navbar-expand-lg fixed-top barraNavD";
        foot.className = "footerD";
    }else{
        cuerpo.className = "bodyL";
        main.className = "mainD";
        nav.className = "navbar navbar-expand-lg fixed-top barraNavL";
        foot.className = "footerL";
    }
}
if(localStorage.getItem("modo")!="oscuro"){
    localStorage.setItem("modo","claro");
}

/*Boton*/
const btnDark = document.getElementById("darkMode");
/*Index/Home*/
const cuerpo = document.getElementById("bodyA");
const main = document.getElementById("mainA");
const titulo = document.getElementById("tituloA");
/*NavBar/Footer*/
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
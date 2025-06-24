let encabezado = document.querySelector('h1');

encabezado.textContent = "CLASE 23/06/2025";


let btnCambio = document.querySelector('.cbnImagen');

btnCambio.addEventListener('click', function(){    
        let imagen  = document.querySelector('img');
        imagen.setAttribute('src', 'img/tres.jpg');
}
)




//Alterando CSS
let recuadro = document.querySelector(".cuadro")
recuadro.style.backgroundColor = "green";



let btnSaludo = document.querySelector('.slf');

btnSaludo.addEventListener('click', function(){
    alert("Hola Saludo Final");

    let elementosLi = document.querySelectorAll('li');

    elementosLi.forEach((li, index) => {
    if (index === 0) {
        li.style.fontFamily = 'Arial';
    } else if (index === 1) {
        li.style.fontFamily = 'Courier New';
    } else if (index === 2) {
        li.style.fontFamily = 'Georgia';
    }
    });

})

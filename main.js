//alert('Olá mundo');


function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[4].onclick = tocaSomSplash;

let contador = 0;

while (contador < 9) {
    listaDeTeclas[0].onclick = tocaSomSplash;

    contador = contador + 1;

    console.log(contador);

};
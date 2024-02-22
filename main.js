function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName == 'audio') {

        elemento.play();
    } else {
        alert('Elemento não encontrado')
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla"); //esta const é um arr

let contador = 0;

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        //evento, quando a tecla é pressionada

        //console.log(evento.code === 'Space'); //printa a tecla que foi digitada

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        tecla.onkeyup = function () {
            //quando solta a tecla
            tecla.classList.remove('ativa');
        };
    }
};

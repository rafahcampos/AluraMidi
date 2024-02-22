function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
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

    console.log(evento.code == 'Space'); //printa a tecla que foi digitada

    if (evento.code == "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    //quando solta a tecla
    tecla.classList.remove("ativa");
  };
}

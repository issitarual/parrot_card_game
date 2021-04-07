let numeroDeCartas = parseInt(prompt ("Com quantas cartas você quer jogar?"));

    while(numeroDeCartas%2 != 0 || numeroDeCartas > 14 || numeroDeCartas < 4){
    numeroDeCartas = parseInt(prompt ("Com quantas cartas você quer jogar?"));
    }

    for (let i = 1; i < numeroDeCartas; i++){
        const elemento = document.querySelector(".container-carta");
        elemento.innerHTML = elemento.innerHTML + `<div class="carta">
        <img src="imagens/front.png" alt="papagaio inical">  
      </div>`;
    }

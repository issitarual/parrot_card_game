    let numeroDeCartas = parseInt(prompt ("Com quantas cartas você quer jogar?"));
while(numeroDeCartas%2 != 0 || numeroDeCartas > 14 || numeroDeCartas < 4){
    alert("escolhe outro");
    numeroDeCartas = parseInt(prompt ("Com quantas cartas você quer jogar?"));
   
}

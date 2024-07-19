const juegos = Number(prompt('Bienvenido al cachipún contra la máquina! ¿Cuántos juegos quieres jugar contra la máquina?'));

//variable puntuacion
let puntuacionJugador = 0;
let puntuacionMaquina = 0;

//ciclo de jugadas
for(let i= 1; i <= juegos; i++){
  const jugada = Number(prompt("introduce que elemento tirarás esta jugada \n Introduce 0 para Piedra, 1 para papel o 2 para tijera"));

  //switch de opciones de jugadas escogidas por jugador
  switch(jugada){
    //todos los posibles casos
    case 0:
      var jugadaPalabra = '<b>Piedra</b>';
      break; 
    case 1:
      var jugadaPalabra = '<b>Papel</b>';
      break;
    case 2:
      var jugadaPalabra = "<b>Tijera</b>";
      break;
      //fin de juego y reinicio si jugador introduce otro valor
    default:
      alert('Opción no válida. fin del juego');
      location.reload();
      break;
   }

   //maquina escoge un valor aleatoreo del 0 al 2
   let jugadaMaquina = Math.floor(Math.random()*3);
   
   //switch de opciones de jugadas escogidas por máquina
   switch(jugadaMaquina){
    //todos los posibles casos
    case 0:
      var jugadaMaquinaPalabra = '<b>Piedra</b>';
      break; 
    case 1:
      var jugadaMaquinaPalabra = '<b>Papel</b>';
      break;
    case 2:
      var jugadaMaquinaPalabra = "<b>Tijera</b>";
      break;
      //caso por defecto
    default:
      var jugadaMaquinaPalabra = "<b>Nada</b>";
      break;
   }
  
  //resultados de jugada
   if(jugada == jugadaMaquina){
    var resultadoJugada = 'Es un empate.';
    puntuacionJugador++
    puntuacionMaquina++
   }

   if(jugada == 2 && jugadaMaquina == 1 || jugada == 1 && jugadaMaquina == 0 || jugada == 0 && jugadaMaquina == 2){
    var resultadoJugada = 'Ganaste esta jugada!';
    puntuacionJugador++
   }

   if(jugada == 2 && jugadaMaquina == 0 || jugada == 1 && jugadaMaquina == 2 || jugada == 0 && jugadaMaquina == 1){
    var resultadoJugada = 'La máquina ganó esta jugada.';
    puntuacionMaquina++
   }
  //imprimir jugada a navegador
  document.write(`<p>En la jugada Número ${i}, tu escogiste ${jugadaPalabra} y la máquina escogió ${jugadaMaquinaPalabra}. ${resultadoJugada}</p>`);
}
//puntuacion final
document.write(`<p>Tu puntuación final es de: <b>${puntuacionJugador} puntos</b>, y la de la máquina es de <b>${puntuacionMaquina} puntos</b>`);


//resultado final
if (puntuacionJugador > puntuacionMaquina){
  resultadoFinal = '<h2>Felicidades! le ganaste al cachipún a la máquina!</h2>';
} else if(puntuacionJugador == puntuacionMaquina){
  resultadoFinal = '<h2>Tu y la máquina empataron</h2>';
} else if(puntuacionJugador < puntuacionMaquina){
  resultadoFinal = '<h2>No puede ser! la máquina te ganó al cachipún!</h2>';
} else {
  resultadoFinal='<h2>¿Qué pasó? recarga el juego para intentarlo de nuevo.</h2>';
}

document.write(resultadoFinal)

document.write(`<p>Fin del juego.</p>`);

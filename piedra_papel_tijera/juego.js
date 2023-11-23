function aleatoria(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function eleccion(jugada) {
   let resultado = ""
   if(jugada == 1) { 
       resultado = "piedra 🥌"
   } else if (jugada == 2) { 
       resultado = "papel 📰"
   } else if (jugada == 3) { 
       resultado = "tijera ✂️"
   } else { 
       resultado = "MAL ELEGIDO"
   }
   return resultado
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0 
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
   pc = aleatoria(1,3)
   jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
   //alert("Elegiste " + jugador)

   alert("pc elige: " + eleccion(pc))
   alert("Tu eliges:" + eleccion(jugador))

   // combate  
   if (pc == jugador) { 
       alert("empate")
   } else if (jugador == 1 && pc == 3) { 
       alert("ganaste")
       triunfos = triunfos + 1
   } else if (jugador == 2 && pc == 1) { 
       alert("ganaste")
       triunfos = triunfos + 1
   } else if (jugador == 3 && pc == 2) { 
       alert("ganaste")
       triunfos = triunfos + 1
   } else {  
       alert("perdiste")
       perdidas = perdidas + 1
   }

}

alert("Ganaste " + triunfos + " veces. perdiste " + perdidas
+ "veces.")
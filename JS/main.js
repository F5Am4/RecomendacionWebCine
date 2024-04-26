// WEB DE CINE
/*
-'INPUT' PARA LA EDAD
-4 'BUTTON' PARA GENEROS
-GENEROS: COMEDIA, DRAMA, MUSICAL, CRIMEN
-FUNCIÓN QUE USE 'SWITCH' E 'IF'
- MIS 3 CATEGORÍAS DE EDADES SON:
  *MENORES DE 13
  *MENORES DE 16
  *16 O MAYORES
  */


 
 
 function recomendar(genero){
   
   let elementoRespuesta = document.getElementById('textoRespuesta')
   let elementoEdad = document.getElementById('edad')
   let edad = elementoEdad.value
   

      switch(genero){
            case 'comedia':
            if (edad < 13){
              elementoRespuesta.textContent ="Kung Fusion, apta para todo el público"
            } else {
              if (edad < 16) {
              elementoRespuesta.textContent = "Larry y Yo, Apta para menores de 16 años"
            } else {
              elementoRespuesta.textContent = "Matando Cabos, para mayores de 13 años en adelante";
            }
          }
          break
            
            case 'drama':
              if (edad < 13) {
                elementoRespuesta.textContent = "Maverick II. Apta para todo el público";
              } else {
                if (edad < 16){
                elementoRespuesta.textContent = "Harry Potter y el prisionero de Askavan. Apta para menores de 16 años en adelante"
              } else {
                elementoRespuesta.textContent= 'Inhala. Solo para mayores de 16 años'
              }
            }
            break

            case 'musical':
              if (edad < 13){
                elementoRespuesta.textContent = "HairSpray. Apta para todo el público"
              } else {
                if(edad < 16){
                elementoRespuesta.textContent = "La Bella y la Bestia. Apta para menores de 16 años";
              } else {
                elementoRespuesta.textContent = 'Circus. Solo para mayores de 16 años'
              }
            }
            break

            case 'crimen':
              if (edad < 13){
                elementoRespuesta.textContent = "Jhon Wick. Para mayores de 11 años"
              } else {
                if(edad < 16){
                elementoRespuesta.textContent = "Batman, El caballero de la noche. Apta para menores de 16 años";
              } else {
                elementoRespuesta.textContent = 'El abogado del diablo. Solo para mayores de 16 años'
              }
            }
            break
        
      }
  }
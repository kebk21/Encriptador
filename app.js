let mensaje = document.querySelector(".contenido-revelado");
let msj = document.querySelector(".contenido-encriptar");
//BOTON COPIAR
function copiarA() {
  let copiar = document.querySelector(".contenido-revelado");
  copiar.select();
  document.execCommand("copy");
  msj.focus();
  swal.fire({
    icon: "info",
    iconColor: "blue",
    title: "Copiado al portapapeles",
    timer: 1500,
    timerProgressBar: true,
    position: "top-right",
    showConfirmButton: false,
    customClass: {
      timerProgressBar: 'progreso'
      }
    });
  msj.value = '';
}

//Crear funcion que capture lo escrito por el usuario.
function obtenerTexto() {
  let textoRecibido = document.querySelector("#encriptar").value;
  if(textoRecibido == false) {
    swal.fire({
      icon: "error",
      iconColor: "red",
      title: "Favor de ingresar un texto.",
      timer: 1500,
      timerProgressBar: true,
      position: "center",
      showConfirmButton: false,
      customClass: {
        timerProgressBar: 'progreso'
      }
    })
  }
  else {
    let encriptacion = encriptar(textoRecibido);
    mensaje.value = encriptacion;
    mensaje.style.backgroundImage = "none";
  }
}
function desencriptacion() {
  let textoRecibido = document.querySelector("#encriptar").value;
  if(textoRecibido == false) {
    swal.fire({
      icon: "error",
      iconColor: "red",
      title: "Favor de ingresar un texto.",
      timer: 1500,
      timerProgressBar: true,
      position: "center",
      showConfirmButton: false,
      customClass: {
        timerProgressBar: 'progreso'
      }
    })
  }
  else {
    let desencriptacion = desencriptar(textoRecibido);
    mensaje.value = desencriptacion;
    mensaje.style.backgroundImage = "none";
  } 
}
//Función que mapea el texto ingresado, encripta y devuelve el texto encriptado.
function encriptar(texto) {
    texto = texto.toLowerCase();
    const busqueda = {
      'a': 'ai',
      'á': 'ai',
      'à': 'ai',
      'e': 'enter',
      'é': 'enter',
      'è': 'enter',
      'i': 'imes',
      'í': 'imes',
      'ì': 'imes',
      'o': 'ober',
      'ó': 'ober',
      'ò': 'ober',
      'u': 'ufat',
      'ú': 'ufat',
      'ù': 'ufat'
    };
    let encriptado = '';
    let i;
    let letra;
    for(i = 0; i < texto.length; i++) {
        letra = texto[i];
        if(busqueda[letra]) {
            encriptado += busqueda[letra];
        }
        else {
            encriptado += letra;
        }
    }
    return encriptado;
}

//Función que ve la encriptación, mapea las letras encriptadas y devuelve texto original.
function desencriptar(encriptado) {
  let desencriptado = '';
  let i = 0;
  while (i < encriptado.length) {
    let letra = encriptado[i];
    if (letra === 'a' && encriptado[i + 1] === 'i') {
      desencriptado += 'a';
      i += 2;
    } else if (letra === 'e' && encriptado[i + 1] === 'n' && encriptado[i + 2] === 't' && encriptado[i + 3] === 'e' && encriptado[i + 4] === 'r') {
      desencriptado += 'e';
      i += 5;
    } else if (letra === 'i' && encriptado[i + 1] === 'm' && encriptado[i + 2] === 'e' && encriptado[i + 3] === 's') {
      desencriptado += 'i';
      i += 4;
    } else if (letra === 'o' && encriptado[i + 1] === 'b' && encriptado[i + 2] === 'e' && encriptado[i + 3] === 'r') {
      desencriptado += 'o';
      i += 4;
    } else if (letra === 'u' && encriptado[i + 1] === 'f' && encriptado[i + 2] === 'a' && encriptado[i + 3] === 't') {
      desencriptado += 'u';
      i += 4;
    } else {
      desencriptado += letra;
      i++;
    }
  }
  return desencriptado;
}

//Para dar "enter" y que se encripte
var codificar = document.querySelector(".contenido-encriptar");
codificar.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    obtenerTexto();
    document.querySelector(".boton-codificar").click();
    mensaje.focus();
  }
});
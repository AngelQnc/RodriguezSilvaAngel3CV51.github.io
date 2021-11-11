"use strict";
var raiz = document.getElementById("raiz"),
    salida = document.getElementById("salida");
raiz.addEventListener("submit", proceso, false);
function proceso(){
    var valor = raiz["valor"].value,
    resultado = [], res;
    try{
      valida(!isNaN(valor), "El valor debe ser un número.");
      valida(valor > 0, "El valor no puede ser menor o igual a 0.");
      res = Math.sqrt(valor);
      resultado += "la raiz de " + valor + " = " + res + "\n";
      raiz["salida"].value = resultado;
    }
    catch(e){
      raiz["salida"].value = e.message;
    }
    
  }
raiz["limpiar"].addEventListener("click", limpiar, false);
function limpiar(){
  raiz["valor"].value = "";
  raiz["salida"].value = "";
}

function valida(cond, mensaje) {
  if (!cond) {
    throw new Error(mensaje);
  }
}

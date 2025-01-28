'use strict';


// POR MEDIO DE LA CONSTANTE COLOR ACCEDEMOS AL INPUT CON ID COLOR Y ALMACENAMOS SUS VALORES ,

var color = document.querySelector("#color");

// EN EL DIV SALIDA CREAMOS UNA NUEVA CONSTANTE PARA IR ALMACENANDO LOS VALORES DE SALIDA DEL COLOR
var salida = document.querySelector("#salida");
var storage = localStorage.getItem('colorValue') || '#ffffff';
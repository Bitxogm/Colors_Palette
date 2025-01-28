// POR MEDIO DE LA CONSTANTE COLOR ACCEDEMOS AL INPUT CON ID COLOR Y ALMACENAMOS SUS VALORES ,

const color = document.querySelector("#color");

// EN EL DIV SALIDA CREAMOS UNA NUEVA CONSTANTE PARA IR ALMACENANDO LOS VALORES DE SALIDA DEL COLOR
const salida = document.querySelector("#salida");
const lista =document.querySelector('#list');
const number = document.querySelector('#colors')

const storage = JSON.parse(localStorage.getItem('colorValue')) || '#ffffff';
const colorList = JSON.parse(localStorage.getItem('colorList')) || [];
'use strict';

var _this = this;
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }
var setColor = function setColor() {
  _newArrowCheck(this, _this);
  // AHORA POR MEDIO DEL EVENTO ACCEDEMOS AL INPUT Y ALMACENAMOS EL VALOR EN LA CONSTANTE VALUE QUE ACCEDE AL VALOR REAL EN CADA MOMENTO 
  var value = color.value;

  // AHORA POR MEDIO DE INNER.HTML ACCEDEMOS EN SALIDA A EL Y LE MANDAMOS VALUE , QUE SERA EL COLOR CADA VEZ QUE CAMBIEMOS
  salida.innerHTML = value;

  // ACCEDEMOS AL ESTILO Y BACKGROUND DE SALIDA Y LE MANDAMOS EL COLOR VALUE , QUE CAMBIARA AL NUEVO VALOR EL BACKGROUND DEL DIV SALIDA
  salida.style.background = value;
  saveColor(value);
}.bind(this);
'use strict';

var _this = this;
function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }
// Creamos una const para guardar el valor del color , y va a recibir como parametro el valor del color.
var saveColor = function saveColor(value) {
  _newArrowCheck(this, _this);
  localStorage.setItem('colorValue', value);
}.bind(this);
"use strict";

//requireds
var fs = require('fs');

var colors = require('colors');

var listarTabla = function listarTabla(base) {
  var limite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  console.log('==========='.green);
  console.log("tabla de ".concat(base).green);
  console.log('==========='.green);

  for (var i = 1; i <= limite; i++) {
    console.log("".concat(base, " * ").concat(i, " = ").concat(base * i));
  }
};

var crearArchivo = function crearArchivo(base) {
  var limite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return new Promise(function (resolve, reject) {
    if (!Number(base)) {
      reject("el valor introducido ".concat(base, " no es un numero"));
      return;
    }

    var data = '';

    for (var i = 1; i <= limite; i++) {
      data += "".concat(base, " * ").concat(i, " = ").concat(base * i, "\n");
    }

    fs.writeFile("tablas/tabla-".concat(base, "-al").concat(limite, ".txt"), data, function (err) {
      if (err) reject(err);else resolve("tabla-".concat(base, "-al").concat(limite, ".txt"));
    });
  });
};

module.exports = {
  crearArchivo: crearArchivo,
  listarTabla: listarTabla
};
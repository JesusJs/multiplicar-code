"use strict";

//requireds
// const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');
// let base = 9;
// let data = '';
// for (let i = 1; i <= 10; i++) {
//     data += `${ base } * ${ i } = ${ base * i}\n`;
// }
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });
var argv = require('./config/yargs').argv;

var colors = require('colors');

var _require = require('./multiplicar/multiplicar'),
    crearArchivo = _require.crearArchivo,
    listarTabla = _require.listarTabla;

var comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite).then(function (archivo) {
      return console.log("Archivo creado: ", colors.green(archivo));
    })["catch"](function (e) {
      return console.log(e);
    });
    break;

  default:
    console.log('Comando no reconocido');
} // console.log(argv.base);
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));
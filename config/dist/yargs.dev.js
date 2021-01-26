"use strict";

var opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    "default": 10
  }
};

var argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', opts).command('crear', 'Genera un archivo con la tabla de multiplicar', opts).help().argv;

module.exports = {
  argv: argv
};
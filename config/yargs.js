const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      description: 'Base para obtener tabla de multiplicar',
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      description: 'Listar la tabla por consola',
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero';
    } else {
      return true;
    }
  }).argv;

module.exports = argv;

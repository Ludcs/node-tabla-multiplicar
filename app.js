const {crearTablaMultiplicar} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();
// console.log(argv);
// console.log('Base', argv.b);
// console.log('Listar', argv.l);

crearTablaMultiplicar(argv.b, argv.l)
  .then((nombreArchivo) =>
    console.log(nombreArchivo.bgGreen, 'fue creado con exito')
  )
  .catch((err) => console.log(err));

const fs = require('fs');

const crearTablaMultiplicar = async (base, listar) => {
  try {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let salida = '';
    arr.map((el) => {
      return (salida += `${base} x ${el} = ${base * el}\n`);
    });

    listar && console.log(salida.bgYellow);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearTablaMultiplicar,
};

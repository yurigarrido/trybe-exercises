const fs = require('fs');

const writeAFile = (fileName, data) => {
  try {
    const conteudoDoArquivo = fs.writeFileSync(fileName, data);

    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

module.exports = { writeAFile };

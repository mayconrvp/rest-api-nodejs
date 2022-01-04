const fs = require("fs");
const path = require("path");
// fs.readFile("./assets/salsicha.jpg", (erro, buffer) => {
//   console.log("A imagem foi bufferizada");
//   fs.writeFile("./assets/salsicha2.jpg", buffer, (erro) => {
//     console.log("Imagem foi escrita");
//   });
// });

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
  const tiposValidos = ["jpg", "png", "jpeg"];
  const tipo = path.extname(caminho);
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

  if (tipoEhValido) {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;

    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on("finish", () => callbackImagemCriada(false, novoCaminho));
  } else {
    const erro = "Tipo é inválido";
    console.log("Erro! Tipo de arquivo inválido!");
    callbackImagemCriada(erro);
  }
};

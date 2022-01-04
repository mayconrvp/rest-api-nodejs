const fs = require("fs");
// fs.readFile("./assets/salsicha.jpg", (erro, buffer) => {
//   console.log("A imagem foi bufferizada");
//   fs.writeFile("./assets/salsicha2.jpg", buffer, (erro) => {
//     console.log("Imagem foi escrita");
//   });
// });

fs.createReadStream("./assets/salsicha.jpg")
  .pipe(fs.createWriteStream("./assets/salsicha-stream.jpg"))
  .on("finish", () => console.log("A imagem foi escrita com sucesso"));

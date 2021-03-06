const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/database/conexao");
const Tabelas = require("./infraestrutura/database/Tabelas");

conexao.connect((err) => {
  if (err) console.log(err);
  else {
    console.log("Conectado com sucesso");
    Tabelas.init(conexao);
    const app = customExpress();
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  }
});

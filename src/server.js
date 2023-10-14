const app = require("./app");
// const connection = require("./db/connection");

const PORT = 3002;

app.listen(PORT, async () => {
  console.log(`API Controlcash está sendo executada na porta ${PORT}`);

  // testando a comunicação com o MySQL
  // const [result] = await connection.execute("SELECT 1");
  // if (result) {
  //   console.log("MySQL connection OK");
  // }
});

import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

async function startServer() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado com sucesso");

    await db.sync();

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar no banco:", error);
    process.exit(1);
  }
}

startServer();

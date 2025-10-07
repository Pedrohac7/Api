import express from "express";
import clients from "./src/controllers/clients.js"

const routes = express.Router();

routes.get("/listaClientes",clients.listaClientes);
routes.post("/adicionaCliente", clients.adicionaCliente);
routes.get("/buscaCliente/:id", clients.listaCliente);
routes.put("/editarCliente/:id", clients.editaCliente);
routes.delete("/deletarCliente/:id", clients.deletaCliente);

export { routes as default };

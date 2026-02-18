const { Router } = require("express");
const clientsController = require("../controllers/clients");

const routes = Router();

routes.get("/clients", clientsController.listaClientes);
routes.post("/clients", clientsController.adicionaCliente);
routes.get("/clients/:id", clientsController.listaCliente);
routes.put("/clients/:id", clientsController.editaCliente);
routes.delete("/clients/:id", clientsController.deletaCliente);

module.exports = routes;

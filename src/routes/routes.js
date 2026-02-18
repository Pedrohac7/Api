const { Router } = require("express");
const clientsController = require("../controllers/clients");
const authMiddleware = require("../middlewares/auth.middleware");

const routes = Router();

routes.get("/clients", authMiddleware, clientsController.listaClientes);
routes.post("/clients", authMiddleware, clientsController.adicionaCliente);
routes.get("/clients/:id", authMiddleware, clientsController.listaCliente);
routes.put("/clients/:id", authMiddleware, clientsController.editaCliente);
routes.delete("/clients/:id", authMiddleware, clientsController.deletaCliente);

module.exports = routes;

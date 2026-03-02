const { Router } = require("express");
const clientsController = require("../controllers/clients");
const authMiddleware = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");
const { 
  createClientSchema, 
  updateClientSchema 
} = require("../validations/client.schema");

const routes = Router();

routes.get(
  "/clients",
  authMiddleware,
  clientsController.listaClientes
);

routes.post(
  "/clients",
  authMiddleware,
  validate(createClientSchema),
  clientsController.adicionaCliente
);

routes.get(
  "/clients/:id",
  authMiddleware,
  clientsController.listaCliente
);

routes.put(
  "/clients/:id",
  authMiddleware,
  validate(updateClientSchema),
  clientsController.editaCliente
);

routes.delete(
  "/clients/:id",
  authMiddleware,
  clientsController.deletaCliente
);

module.exports = routes;
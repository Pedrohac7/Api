import { Router } from "express";
import clientsController from "./src/controllers/clients.js";

const routes = Router();

routes.get("/clients", clientsController.listaClientes);
routes.post("/clients", clientsController.adicionaCliente);
routes.get("/clients/:id", clientsController.listaCliente);
routes.put("/clients/:id", clientsController.editaCliente);
routes.delete("/clients/:id", clientsController.deletaCliente);

export default routes;

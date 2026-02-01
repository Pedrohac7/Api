import { Router } from "express";
import clientsController from "./src/controllers/clients.js";

const routes = Router();

routes.get("/clients", clientsController.list);
routes.post("/clients", clientsController.create);
routes.get("/clients/:id", clientsController.findById);
routes.put("/clients/:id", clientsController.update);
routes.delete("/clients/:id", clientsController.remove);

export default routes;

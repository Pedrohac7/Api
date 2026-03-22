const clientService = require("../services/client.service");

function success(res, status, data) {
  return res.status(status).json({
    success: true,
    data,
  });
}

function failure(res, status, message) {
  return res.status(status).json({
    success: false,
    error: message,
  });
}

async function listaClientes(req, res) {
  try {
    const clients = await clientService.listarClientes(req.userId);
    return success(res, 200, clients);
  } catch (error) {
    return failure(res, 500, error.message);
  }
}

async function listaCliente(req, res) {
  try {
    const client = await clientService.buscarCliente(req.params.id, req.userId);
    return success(res, 200, client);
  } catch (error) {
    return failure(res, 404, error.message);
  }
}

async function adicionaCliente(req, res) {
  try {
    const client = await clientService.criarCliente(req.body, req.userId, req.tenantId);
    return success(res, 201, client);
  } catch (error) {
    return failure(res, 400, error.message);
  }
}

async function editaCliente(req, res) {
  try {
    const client = await clientService.atualizarCliente(
      req.params.id,
      req.body,
      req.userId
    );
    return success(res, 200, client);
  } catch (error) {
    return failure(res, 404, error.message);
  }
}

async function deletaCliente(req, res) {
  try {
    await clientService.deletarCliente(req.params.id, req.userId);
    return res.status(204).send();
  } catch (error) {
    return failure(res, 404, error.message);
  }
}

module.exports = {
  listaClientes,
  listaCliente,
  adicionaCliente,
  editaCliente,
  deletaCliente,
};
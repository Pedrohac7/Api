import ClientRepository from "../models/clientsModel.js";

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
    const clients = await ClientRepository.findAll();
    return success(res, 200, clients);
  } catch (error) {
    return failure(res, 500, "Erro ao listar clientes");
  }
}

async function listaCliente(req, res) {
  try {
    const client = await ClientRepository.findByPk(req.params.id);

    if (!client) {
      return failure(res, 404, "Cliente nao encontrado");
    }

    return success(res, 200, client);
  } catch (error) {
    return failure(res, 500, "Erro ao buscar cliente");
  }
}

async function adicionaCliente(req, res) {
  try {
    const client = await ClientRepository.create({
      nome: req.body.nome,
      email: req.body.email,
    });

    return success(res, 201, client);
  } catch (error) {
    return failure(res, 400, "Email já cadastrado");
  }
}

async function editaCliente(req, res) {
  try {
    const [updated] = await ClientRepository.update(
      {
        nome: req.body.nome,
        email: req.body.email,
      },
      {
        where: { id: req.params.id },
      }
    );

    if (!updated) {
      return failure(res, 404, "Cliente nao encontrado");
    }

    const client = await ClientRepository.findByPk(req.params.id);
    return success(res, 200, client);
  } catch (error) {
    return failure(res, 500, "Erro ao atualizar cliente");
  }
}

async function deletaCliente(req, res) {
  try {
    const deleted = await ClientRepository.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      return failure(res, 404, "Cliente nao encontrado");
    }

    return res.status(204).send();
  } catch (error) {
    return failure(res, 500, "Erro ao deletar cliente");
  }
}

export default {
  listaClientes,
  listaCliente,
  adicionaCliente,
  editaCliente,
  deletaCliente,
};

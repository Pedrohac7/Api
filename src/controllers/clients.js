import ClientRepository from "../models/clientsModel.js";

async function listaClientes(req, res) {
  try {
    const clients = await ClientRepository.findAll();
    return res.status(200).json(clients);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar clientes" });
  }
}

async function listaCliente(req, res) {
  try {
    const client = await ClientRepository.findByPk(req.params.id);

    if (!client) {
      return res.status(404).json({ error: "Cliente nao encontrado" });
    }

    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar cliente" });
  }
}

async function adicionaCliente(req, res) {
  try {
    const client = await ClientRepository.create({
      nome: req.body.nome,
      email: req.body.email,
    });

    return res.status(201).json(client);
  } catch (error) {
    return res.status(400).json({
      error: "Email já cadastrado",
    });
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
      return res.status(404).json({ error: "Cliente nao encontrado" });
    }

    const client = await ClientRepository.findByPk(req.params.id);
    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar cliente" });
  }
}

async function deletaCliente(req, res) {
  try {
    const deleted = await ClientRepository.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      return res.status(404).json({ error: "Cliente nao encontrado" });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar cliente" });
  }
}

export default {
  listaClientes,
  listaCliente,
  adicionaCliente,
  editaCliente,
  deletaCliente,
};

import ClientRepository from "../models/clientsModel.js";

function listaClientes(req, res) {
  ClientRepository.findAll().then((result) => res.json(result));
}

function listaCliente(req, res) {
  ClientRepository.findOne(req.params.id).then((result) => res.json(result));
}

function adicionaCliente(req, res) {
  ClientRepository.create({
    nome: req.body.nome,
    email: req.body.email,
  }).then((result) => res.json(result));
}

async function editaCliente(req, res) {
  await ClientRepository.update(
    {
      nome: req.body.nome,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deletaCliente(req, res) {
  await ClientRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  ClientRepository.findAll().then((result) => res.json(result));
}

export default { listaClientes, adicionaCliente, listaCliente, editaCliente, deletaCliente };


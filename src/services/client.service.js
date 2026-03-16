const { Client } = require("../models");
const AppError = require("../errors/AppError");

async function listarClientes(userId) {
  return Client.findAll({
    where: { userId }
  });
}

async function buscarCliente(id, userId) {
  const client = await Client.findOne({
    where: { id, userId }
  });

  if (!client) {
    throw new AppError("Cliente não encontrado", 404, "CLIENT_NOT_FOUND");
  }

  return client;
}

async function criarCliente(data, userId) {
  return Client.create({
    ...data,
    userId
  });
}

async function atualizarCliente(id, data, userId) {
  const client = await buscarCliente(id, userId);
  await client.update(data);
  return client;
}

async function deletarCliente(id, userId) {
  const client = await buscarCliente(id, userId);
  await client.destroy();
}

module.exports = {
  listarClientes,
  buscarCliente,
  criarCliente,
  atualizarCliente,
  deletarCliente
};
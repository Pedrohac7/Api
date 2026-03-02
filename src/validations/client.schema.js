const { z } = require("zod");

const createClientSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100),

  email: z
    .string()
    .email("Email inválido")
});

const updateClientSchema = createClientSchema.partial();

module.exports = {
  createClientSchema,
  updateClientSchema
};
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User,Tenant } = require('../models');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    const token = jwt.sign(
      { id: user.id, tenantId: user.tenantId },                 // payload
      process.env.JWT_SECRET,          // chave secreta
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return res.json({ token });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
};
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const tenant = await Tenant.create({
      name: `${name}-tenant`
    });

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      tenantId: tenant.id
    });

    return res.status(201).json(user);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao registrar' });
  }
};


API - CRUD de Clientes com Autenticação JWT

API REST desenvolvida com Node.js, Express e Sequelize.
Possui autenticação com JWT e senha criptografada com bcrypt.

Tecnologias

Node.js

Express

Sequelize

MySQL

JWT

bcryptjs

dotenv

Funcionalidades

Registro de usuário

Login com geração de token JWT

CRUD de clientes

Rotas protegidas por middleware de autenticação

Instalação
git clone https://github.com/Pedrohac7/Api.git
cd Api
npm install


Criar arquivo .env:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=seu_segredo


Rodar o projeto:

npm run dev


Servidor roda em:

http://localhost:3000

Autenticação

Após login, o token deve ser enviado no header:

Authorization: Bearer SEU_TOKEN

Rotas
Auth

POST /api/auth/register

POST /api/auth/login

Clientes (protegidas)

GET /api/clients

POST /api/clients

PUT /api/clients/:id

DELETE /api/clients/:id

Estrutura
src/
 ├── controllers/
 ├── middlewares/
 ├── models/
 ├── routes/
 ├── app.js
 └── server.js

Status

Projeto para fins de estudo e portfólio.

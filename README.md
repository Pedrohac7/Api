# 🔐 Client Management API

API REST desenvolvida com **Node.js**, **Express** e **Sequelize**, com foco em autenticação segura, arquitetura em camadas e suporte a **multi-tenancy**.

> Projeto construído para simular um cenário real de produção, com decisões arquiteturais conscientes e deploy em ambiente cloud.

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|---|---|
| Node.js + Express | Servidor HTTP e roteamento |
| Sequelize + PostgreSQL | ORM e banco de dados relacional |
| JWT | Autenticação stateless |
| bcryptjs | Hash seguro de senhas |
| Docker + Docker Compose | Containerização e ambiente reproduzível |
| dotenv | Gerenciamento de variáveis de ambiente |

---

## 🧠 Decisões técnicas

### Multi-tenancy por token
O tenant é criado no momento do registro e propagado automaticamente via JWT em todas as requisições autenticadas. Isso elimina a necessidade de o cliente informar o tenant manualmente, evitando inconsistências e vulnerabilidades de segurança onde um usuário poderia acessar dados de outro tenant.

### Arquitetura em camadas
O projeto segue separação clara de responsabilidades:
- **Controllers** — recebem a requisição e delegam para a camada de serviço
- **Services** — contêm a lógica de negócio
- **Models** — definem a estrutura e interação com o banco
- **Middlewares** — autenticação e validação de forma centralizada

### Senhas com bcrypt
Nenhuma senha é armazenada em texto puro. O hash é gerado com bcrypt antes de persistir no banco, e a verificação no login compara o hash sem reversão.

---

## 📦 Instalação

```bash
git clone https://github.com/Pedrohac7/Api.git
cd Api
npm install
```

Crie o arquivo `.env` baseado no `.env.example`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=seu_segredo
```

Rodando com Docker:

```bash
docker-compose up --build
```

Ou sem Docker:

```bash
npm run dev
```

---

## 🔑 Autenticação

Após o login, inclua o token no header de todas as rotas protegidas:

```
Authorization: Bearer SEU_TOKEN
```

---

## 📋 Rotas

### Auth

| Método | Rota | Descrição |
|---|---|---|
| POST | `/api/auth/register` | Cria novo usuário e tenant |
| POST | `/api/auth/login` | Autentica e retorna JWT |

### Clientes *(rotas protegidas)*

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/clients` | Lista clientes do tenant |
| POST | `/api/clients` | Cria novo cliente |
| PUT | `/api/clients/:id` | Atualiza cliente |
| DELETE | `/api/clients/:id` | Remove cliente |

---

## 🗂️ Estrutura do projeto

```
├── config/
├── migrations/
├── models/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   └── app.js
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── server.js
```

---

## 🌐 Deploy

A API está em produção:
👉 https://sequelizenode-api.onrender.com

---

## 👨‍💻 Autor

**Pedro Alexandre**  
[LinkedIn](https://linkedin.com/in/pedro-alexandre-621aa2225) · [GitHub](https://github.com/Pedrohac7)

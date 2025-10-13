# API Node.js com Sequelize e MySQL

Esta é uma API RESTful desenvolvida com Node.js, Express, Sequelize ORM e MySQL.

## 🚀 Como rodar com Docker

### Pré-requisitos
- Docker
- Docker Compose

### Comandos para rodar

1. **Clone o projeto e entre na pasta:**
```bash
cd Api
```

2. **Subir os containers (aplicação + MySQL):**
```bash
npm run docker:up
```
ou
```bash
docker-compose up -d
```

3. **Ver os logs dos containers:**
```bash
npm run docker:logs
```

4. **Parar os containers:**
```bash
npm run docker:down
```

### 🔗 Endpoints da API

- `GET /listaClientes` - Listar todos os clientes
- `POST /adicionaCliente` - Adicionar novo cliente
- `GET /buscaCliente/:id` - Buscar cliente por ID
- `PUT /editarCliente/:id` - Editar cliente
- `DELETE /deletarCliente/:id` - Deletar cliente

### 📦 Estrutura do Projeto

```
├── src/
│   ├── controllers/
│   │   └── clients.js
│   ├── models/
│   │   └── clientsModel.js
│   └── db.js
├── routes.js
├── server.js
├── Dockerfile
├── docker-compose.yml
└── package.json
```

### 🔧 Desenvolvimento Local (sem Docker)

1. Instalar dependências:
```bash
npm install
```

2. Configurar arquivo `.env` com as credenciais do MySQL

3. Rodar a aplicação:
```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`
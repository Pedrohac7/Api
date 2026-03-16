# Client Management API

API REST para gerenciamento de clientes com autenticação JWT.

## Stack

Node.js
Express
PostgreSQL
Sequelize
JWT
Docker

## Instalação

npm install

## Rodar local

docker-compose up

## Rotas

POST /api/auth/register
POST /api/auth/login

GET /api/clients
POST /api/clients
PUT /api/clients/:id
DELETE /api/clients/:id

## Exemplo de login

POST /api/auth/login

{
  "email": "user@email.com",
  "password": "123456"
}
# Use a imagem oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Expor a porta que a aplicação vai usar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "server.js"]
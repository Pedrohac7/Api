const express = require('express');
const cors = require('cors');
const errorHandler = require("./src/middlewares/errorHandler");
console.log(__dirname);

const routes = require('./src/routes/routes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use('/api', routes);
app.use('/api/auth', authRoutes);

module.exports = app;

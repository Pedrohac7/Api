const express = require('express');
const cors = require('cors');

const routes = require('./src/routes/routes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/api/auth', authRoutes);

module.exports = app;

const express = require('express');

const routes = require('./routes');
const db = require('./database');
const handleError = require("./middlewares/errorHandler");
const authMiddlewares = require("./middlewares/auth");

const port = 3000;

const app = express ();
db.hasConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

app.use(handleError);

app.listen(3000, () => {
    console.log(`Servidor executando na porta: ${port} `);
});
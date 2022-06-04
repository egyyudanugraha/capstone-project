const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const matrixRouter = require('./routers/matrix');
const historyRouter = require('./routers/history');
require('./db/mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use([userRouter, taskRouter, matrixRouter, historyRouter]);

module.exports = app;

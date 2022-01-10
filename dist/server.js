"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const container_1 = require("./container");
const ordenesHandler = container_1.default.resolve('ordenesHandler');
const rootHandler = container_1.default.resolve('rootHandler');
const app = express();
app.set('json spaces', 2);
app.get('/', rootHandler.index);
app.get('/codigo', rootHandler.codigo);
app.get('/todos', ordenesHandler.todos);
app.listen(3000);
//# sourceMappingURL=server.js.map
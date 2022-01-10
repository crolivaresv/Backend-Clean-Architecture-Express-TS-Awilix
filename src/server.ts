import * as express from 'express';
import { codes } from './types/respuestas';
//import rootHandler from './Handlers/rootHandler';
import container from './container';

const ordenesHandler = container.resolve('ordenesHandler');
const rootHandler = container.resolve('rootHandler');

const app = express();

app.set('json spaces', 2);

app.get('/', rootHandler.index);
app.get('/codigo', rootHandler.codigo);
app.get('/todos', ordenesHandler.todos);

app.listen(3000);

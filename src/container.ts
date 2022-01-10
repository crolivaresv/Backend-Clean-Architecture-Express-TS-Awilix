import {
  createContainer,
  asFunction,
  asValue,
  asClass,
  InjectionMode,
} from 'awilix';

import ordenesHandler from './Handlers/ordenesHandler';
import rootHandler from './Handlers/rootHandler';
import { codes } from './types/respuestas';
import OrdenesService from './Package/ordenes/controller/ordenController';
import infra from './Infra/services';
import fetchers from './Infra/services/ports/fetchers';
import bankferRepository from './Infra/services/fetchers/adapters/bankferRepository';
import ordersRepository from './Infra/services/fetchers/adapters/ordersRepository';
import { UCOrdenes } from './Package/ordenes/domain/usecases/Ordenes';
import { OrdenesModel } from './Package/ordenes/domain/ordenes/ordenModel';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  ordenesHandler: asFunction(ordenesHandler).singleton(),
  rootHandler: asFunction(rootHandler).singleton(),
  codes: asValue(codes),
  ordenesService: asClass(OrdenesService).singleton(),
  infra: asClass(infra).singleton(),
  fetchers: asClass(fetchers).singleton(),
  bankferRepository: asClass(bankferRepository).singleton(),
  ordersRepository: asClass(ordersRepository).singleton(),
  UCOrdenes: asClass(UCOrdenes).singleton(),
  OrdenesModel: asClass(OrdenesModel).singleton(),
});

export default container;

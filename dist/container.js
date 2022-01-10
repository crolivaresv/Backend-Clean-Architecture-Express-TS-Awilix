"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const ordenesHandler_1 = require("./Handlers/ordenesHandler");
const rootHandler_1 = require("./Handlers/rootHandler");
const respuestas_1 = require("./types/respuestas");
const ordenController_1 = require("./Package/ordenes/controller/ordenController");
const services_1 = require("./Infra/services");
const fetchers_1 = require("./Infra/services/ports/fetchers");
const bankferRepository_1 = require("./Infra/services/fetchers/adapters/bankferRepository");
const ordersRepository_1 = require("./Infra/services/fetchers/adapters/ordersRepository");
const Ordenes_1 = require("./Package/ordenes/domain/usecases/Ordenes");
const ordenModel_1 = require("./Package/ordenes/domain/ordenes/ordenModel");
const container = (0, awilix_1.createContainer)({
    injectionMode: awilix_1.InjectionMode.PROXY,
});
container.register({
    ordenesHandler: (0, awilix_1.asFunction)(ordenesHandler_1.default).singleton(),
    rootHandler: (0, awilix_1.asFunction)(rootHandler_1.default).singleton(),
    codes: (0, awilix_1.asValue)(respuestas_1.codes),
    ordenesService: (0, awilix_1.asClass)(ordenController_1.default).singleton(),
    infra: (0, awilix_1.asClass)(services_1.default).singleton(),
    fetchers: (0, awilix_1.asClass)(fetchers_1.default).singleton(),
    bankferRepository: (0, awilix_1.asClass)(bankferRepository_1.default).singleton(),
    ordersRepository: (0, awilix_1.asClass)(ordersRepository_1.default).singleton(),
    UCOrdenes: (0, awilix_1.asClass)(Ordenes_1.UCOrdenes).singleton(),
    OrdenesModel: (0, awilix_1.asClass)(ordenModel_1.OrdenesModel).singleton(),
});
exports.default = container;
//# sourceMappingURL=container.js.map
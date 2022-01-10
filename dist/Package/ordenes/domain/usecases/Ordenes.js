"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UCOrdenes = void 0;
class UCOrdenes {
    constructor({ OrdenesModel }) {
        this.editarOrden = (orden) => {
            return this.OrdenesModel.edit(orden);
        };
        this.listarOrden = (ordenes) => {
            const filtrar_completed = ordenes.data
                .filter((e) => e.completed === false)
                .map((el) => {
                return {
                    id: el.id,
                    description: el.title,
                    price: 1,
                    date: new Date(),
                    type: 'MKP',
                };
            });
            return this.OrdenesModel.list(filtrar_completed);
        };
        this.OrdenesModel = OrdenesModel;
    }
}
exports.UCOrdenes = UCOrdenes;
//# sourceMappingURL=Ordenes.js.map
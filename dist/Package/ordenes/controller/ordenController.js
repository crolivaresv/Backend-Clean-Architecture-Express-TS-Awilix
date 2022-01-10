"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrdenesService {
    constructor({ infra, UCOrdenes }) {
        this.UCOrdenes = UCOrdenes;
        this.infra = infra;
    }
    async editarOrden(orden) {
        try {
            const result = this.UCOrdenes.editarOrden(orden);
            if (typeof result === 'boolean')
                throw new Error('Venia malo');
            return '';
        }
        catch (e) {
            throw new Error('Ta malo!');
        }
    }
    async listarOrden() {
        try {
            const obtenerOrdenes = await this.infra.fetchers.orders.todos();
            return this.UCOrdenes.listarOrden(obtenerOrdenes);
        }
        catch (e) {
            throw new Error('Ta malo!');
        }
    }
}
exports.default = OrdenesService;
//# sourceMappingURL=ordenController.js.map
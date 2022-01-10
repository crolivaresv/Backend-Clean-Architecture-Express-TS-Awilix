"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ ordenesService, codes }) => {
    return {
        todos: async (req, res) => res.status(codes.OK).json(await ordenesService.listarOrden()),
    };
};
//# sourceMappingURL=ordenesHandler.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ codes }) => {
    return {
        index: async (req, res) => res.status(codes.OK).send('Bienvenidos API Max Pro 9.0'),
        codigo: (req, res) => res.send(`${codes.OK}`),
    };
};
//# sourceMappingURL=rootHandler.js.map
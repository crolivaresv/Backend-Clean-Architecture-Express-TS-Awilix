import { Request, Response } from 'express';
import { IOrdenesService } from '../Package/ordenes/controller/ordenController';
import { ICodes } from '../types/respuestas';

export interface IOrdenesHandler {
  ordenesService: IOrdenesService;
  codes: ICodes;
}

export default ({ ordenesService, codes }: IOrdenesHandler) => {
  return {
    todos: async (req: Request, res: Response) =>
      res.status(codes.OK).json(await ordenesService.listarOrden()),
  };
};

import { Request, Response } from 'express';
import { IOrdenesService } from '../Package/ordenes/controller/ordenController';
import { ICodes } from '../types/respuestas';
export interface IOrdenesHandler {
    ordenesService: IOrdenesService;
    codes: ICodes;
}
declare const _default: ({ ordenesService, codes }: IOrdenesHandler) => {
    todos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
export default _default;

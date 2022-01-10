import { Request, Response } from 'express';
import { ICodes } from '../types/respuestas';
declare const _default: ({ codes }: {
    codes: ICodes;
}) => {
    index: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    codigo: (req: Request, res: Response) => Response<any, Record<string, any>>;
};
export default _default;

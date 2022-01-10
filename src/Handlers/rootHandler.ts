import { Request, Response } from 'express';
import { ICodes } from '../types/respuestas';

export default ({ codes }: { codes: ICodes }) => {
  return {
    index: async (req: Request, res: Response) =>
      res.status(codes.OK).send('Bienvenidos API Max Pro 9.0'),
    codigo: (req: Request, res: Response) => res.send(`${codes.OK}`),
  };
};

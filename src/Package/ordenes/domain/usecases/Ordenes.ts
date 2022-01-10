import { Ordenes } from '../ordenes/ordenEntity';
import { IModel } from '../ordenes/ordenModel';

export interface IUCOrden {
  editarOrden: (orden: Ordenes) => Ordenes | boolean;
  listarOrden: (orden: Object[]) => Ordenes[];
  OrdenesModel: IModel;
}

export class UCOrdenes implements IUCOrden {
  public OrdenesModel: IModel;
  constructor({ OrdenesModel }: IUCOrden) {
    this.OrdenesModel = OrdenesModel;
  }
  editarOrden = (orden: Ordenes): Ordenes | boolean => {
    return this.OrdenesModel.edit(orden);
  };
  listarOrden = (ordenes: any): Ordenes[] => {
    const filtrar_completed = ordenes.data
      .filter((e: any) => e.completed === false)
      .map((el: any) => {
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
}

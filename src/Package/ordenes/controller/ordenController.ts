import { IUCOrden } from '../domain/usecases/Ordenes';
import { Ordenes } from '../domain/ordenes/ordenEntity';
import { Iinfra } from '../../../Infra/services';

export interface IOrdenesService {
  infra: Iinfra;
  UCOrdenes: IUCOrden;
  editarOrden: (orden: Ordenes) => Promise<string>;
  listarOrden: () => Promise<string>;
}

export default class OrdenesService implements IOrdenesService {
  mongo: any;
  public UCOrdenes: any;
  public infra: Iinfra;
  constructor({ infra, UCOrdenes }: IOrdenesService) {
    this.UCOrdenes = UCOrdenes;
    this.infra = infra;
  }
  async editarOrden(orden: Ordenes): Promise<string> {
    try {
      const result = this.UCOrdenes.editarOrden(orden);
      if (typeof result === 'boolean') throw new Error('Venia malo');
      return '';
      //return this.persistence.guardar(result);
    } catch (e) {
      throw new Error('Ta malo!');
    }
  }
  async listarOrden(): Promise<string> {
    try {
      const obtenerOrdenes = await this.infra.fetchers.orders.todos();
      return this.UCOrdenes.listarOrden(obtenerOrdenes);
    } catch (e) {
      throw new Error('Ta malo!');
    }
  }
}

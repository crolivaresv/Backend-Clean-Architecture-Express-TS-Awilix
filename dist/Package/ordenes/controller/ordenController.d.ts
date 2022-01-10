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
    UCOrdenes: any;
    infra: Iinfra;
    constructor({ infra, UCOrdenes }: IOrdenesService);
    editarOrden(orden: Ordenes): Promise<string>;
    listarOrden(): Promise<string>;
}

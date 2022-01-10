import { Ordenes } from '../ordenes/ordenEntity';
import { IModel } from '../ordenes/ordenModel';
export interface IUCOrden {
    editarOrden: (orden: Ordenes) => Ordenes | boolean;
    listarOrden: (orden: Object[]) => Ordenes[];
    OrdenesModel: IModel;
}
export declare class UCOrdenes implements IUCOrden {
    OrdenesModel: IModel;
    constructor({ OrdenesModel }: IUCOrden);
    editarOrden: (orden: Ordenes) => Ordenes | boolean;
    listarOrden: (ordenes: any) => Ordenes[];
}

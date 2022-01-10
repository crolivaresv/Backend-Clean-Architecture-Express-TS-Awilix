import { IBankferRepository } from '../fetchers/adapters/bankferRepository';
import { IOrdersRepository } from '../fetchers/adapters/ordersRepository';

export interface Ifetchers {
  bankfer: IBankferRepository;
  orders: IOrdersRepository;
}
interface IFetchersTypes {
  bankferRepository: IBankferRepository;
  ordersRepository: IOrdersRepository;
}

export default class fetchers implements Ifetchers {
  public bankfer: IBankferRepository;
  public orders: IOrdersRepository;
  constructor({ bankferRepository, ordersRepository }: IFetchersTypes) {
    this.bankfer = bankferRepository;
    this.orders = ordersRepository;
  }
}

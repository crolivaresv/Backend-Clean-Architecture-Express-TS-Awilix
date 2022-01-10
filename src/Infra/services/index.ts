import { Ifetchers } from './ports/fetchers';

export interface Iinfra {
  fetchers: Ifetchers;
  //persistance: () => fetchers;
}

export default class infra implements Iinfra {
  public fetchers: Ifetchers;
  //public persistance: fetchers;
  constructor({ fetchers }: Iinfra) {
    this.fetchers = fetchers;
  }
}

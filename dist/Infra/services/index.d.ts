import { Ifetchers } from './ports/fetchers';
export interface Iinfra {
    fetchers: Ifetchers;
}
export default class infra implements Iinfra {
    fetchers: Ifetchers;
    constructor({ fetchers }: Iinfra);
}

import { State } from '../shared/enums/state.enum';
import { Item } from 'src/app/shared/interfaces/item';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'John',
    reference: '1245',
    state: State.ALIVRER,
    dateLivraison: '2018-07-08T11:00:00+01:00'
  },
  {
    id: 'b1',
    name: 'William',
    reference: '5698',
    state: State.ENCOURS,
    dateLivraison: '2018-07-06T15:00:00+01:00'
  },
  {
    id: 'c1',
    name: 'Juliette',
    reference: '3697',
    state: State.LIVREE,
    dateLivraison: '2018-07-01T10:57:31+01:00'
  }
];

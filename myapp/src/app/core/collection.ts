import { State } from '../shared/enums/state.enum';
import { Item } from 'src/app/shared/interfaces/item';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'John',
    reference: '1245',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'William',
    reference: '5698',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Juliette',
    reference: '3697',
    state: State.LIVREE
  }
];
